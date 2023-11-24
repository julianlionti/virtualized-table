import { useTableRow, TableRowProps } from "./useTableRow";
import { TableRow as MUITableRow } from "@mui/material";

const TableRow: React.FC<TableRowProps> = (props) => {
  const { children, height, onDoubleClick, ...rest } = useTableRow(props);
  return (
    <MUITableRow {...rest} sx={{ height }} onDoubleClick={onDoubleClick}>
      {children}
    </MUITableRow>
  );
};

export default TableRow;
