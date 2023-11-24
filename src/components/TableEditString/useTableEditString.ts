import { ValidRowModel } from "src/helpers/ts.helper";
import { Column } from "src/models/column.model";

export interface TableEditStringProps<T extends ValidRowModel> {
  column: Column<T>;
  row: T;
}

export const useTableEditString = <T extends ValidRowModel>(
  props: TableEditStringProps<T>
) => {
  const { column, row } = props;
  const { label, isEditable } = column;

  const cellValue = row[column.id];

  return { ...props, label, isEditable, cellValue };
};
