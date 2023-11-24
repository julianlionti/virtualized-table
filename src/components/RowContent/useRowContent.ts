import { useTableContext } from "src/hooks/useTableContext";

export interface RowContentProps {
  index: number;
}

export const useRowContent = (props: RowContentProps) => {
  const { index } = props;
  const { columns } = useTableContext();

  return { columns, index };
};
