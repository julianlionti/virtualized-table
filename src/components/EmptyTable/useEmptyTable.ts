import { useTableContext } from "src/hooks/useTableContext";

export interface EmptyTableProps {
  containerHeight: number;
}

export const useEmptyTable = (props: EmptyTableProps) => {
  const { columns } = useTableContext();
  const colSpan = columns.length;
  return { ...props, colSpan };
};
