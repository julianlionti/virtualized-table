import { HTMLAttributes, useMemo } from "react";
import { Sizes } from "src/constants/sizes";
import useKeypress from "src/hooks/useKeyPress";
import { useTableContext } from "src/hooks/useTableContext";
import { useTableStateContext } from "src/hooks/useTableStateContext";

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  "data-index": number;
}

export const useTableRow = (props: TableRowProps) => {
  const dataIndex = props["data-index"];

  const { data, rowHeight } = useTableContext();
  const { addEditRowState, removeEditRowState } = useTableStateContext();
  const row = data[dataIndex];

  const height = useMemo(() => {
    if (!rowHeight) return Sizes.tableRowHeight;
    return rowHeight(dataIndex);
  }, [rowHeight, dataIndex]);

  const onDoubleClick = () => {
    addEditRowState(row);
  };

  useKeypress("Escape", () => {
    removeEditRowState(row);
  });

  return { ...props, onDoubleClick, height };
};
