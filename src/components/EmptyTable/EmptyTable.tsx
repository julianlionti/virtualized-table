import { TableBody, TableCell, TableRow } from "@mui/material";
import { useEmptyTable, EmptyTableProps } from "./useEmptyTable";

const EmptyTable: React.FC<EmptyTableProps> = (props) => {
  const { colSpan, containerHeight } = useEmptyTable(props);
  return (
    <TableBody>
      <TableRow sx={{ height: containerHeight }}>
        <TableCell align="center" colSpan={colSpan}>
          EmptyTable
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default EmptyTable;
