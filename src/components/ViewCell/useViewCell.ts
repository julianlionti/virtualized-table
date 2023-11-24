import { createElement } from "react";
import { ValidRowModel } from "src/helpers/ts.helper";
import { useTableContext } from "src/hooks/useTableContext";
import { useTableStateContext } from "src/hooks/useTableStateContext";
import { Column } from "src/models/column.model";
import TableEditString from "../TableEditString/TableEditString";

export interface ViewCellProps<T extends ValidRowModel> {
  rowIndex: number;
  column: Column<T>;
}

export const useViewCell = <T extends ValidRowModel>(
  props: ViewCellProps<T>
) => {
  const { rowIndex, column } = props;
  const { format } = column;

  const { data, getRowId } = useTableContext();
  const { editableRows } = useTableStateContext();
  const row = data[rowIndex];
  const value = row[column.id];

  const rowId = row[getRowId()];
  const isEditable = editableRows.includes(rowId);

  const renderCellContent = (): string | null => {
    if (isEditable) return null;
    if (value === undefined) return "-";

    if (format && typeof value === "number") {
      return format(value);
    } else if (value instanceof Date) {
      return value.toLocaleDateString("es-Ar");
    }

    return value;
  };

  const renderEditCellContent = () => {
    if (!isEditable) return null;

    if (typeof value === "string")
      return createElement(TableEditString, {
        column: column as Column<ValidRowModel>,
        row,
      });
    if (typeof value === "number")
      return createElement(TableEditString, {
        column: column as Column<ValidRowModel>,
        row,
      });
    if (value instanceof Date)
      return createElement(TableEditString, {
        column: column as Column<ValidRowModel>,
        row,
      });

    return null;
  };

  return {
    value,
    column,
    isEditable,
    renderCellContent,
    renderEditCellContent,
  };
};
