import ViewCell from "../ViewCell/ViewCell";
import { useRowContent, RowContentProps } from "./useRowContent";
import { memo } from "react";

const Row: React.FC<RowContentProps> = (props) => {
  const { columns, index } = useRowContent(props);
  return columns.map((column) => (
    <ViewCell key={String(column.id)} rowIndex={index} column={column} />
  ));
};

const MemoRow = memo(Row);
export default MemoRow;
