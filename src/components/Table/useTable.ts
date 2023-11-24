import { CSSProperties, ReactNode, useMemo } from "react";
import { countCellsWidth } from "src/helpers/table.helper";
import { useTableContext } from "src/hooks/useTableContext";

export interface TableProps {
  style?: CSSProperties | undefined;
  children?: ReactNode;
  containerWidth: number;
}

export const useTable = (props: TableProps) => {
  const { containerWidth } = props;

  const { columns } = useTableContext();

  const tableWidth = useMemo<number | undefined>(() => {
    const columnsWidth = countCellsWidth(columns);
    if (columnsWidth < containerWidth) return undefined;
    return columnsWidth;
  }, [columns, containerWidth]);

  return { ...props, tableWidth };
};
