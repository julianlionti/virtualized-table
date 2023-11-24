import {
  Box,
  Paper,
  TableCell,
  TablePagination,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  useVirtualizedTable,
  VirtualizedTableProps,
} from "./useVirtualizedTable";
import { Sizes } from "../../constants/sizes";
import { FC } from "react";
import { TableVirtuoso } from "react-virtuoso";
import RowContent from "../RowContent/RowContent";

type PaginationProps = { height: number; component: "div" };
const Pagination = styled(TablePagination)<PaginationProps>`
  .MuiToolbar-root {
    height: ${({ height }) => `${height}px`};
  }
`;

const VirtualizedTable: FC<VirtualizedTableProps> = (props) => {
  const {
    data,
    page,
    rowsPerPage,
    columns,
    handleChangePage,
    handleChangeRowsPerPage,
    getTableComponents,
  } = useVirtualizedTable(props);

  return (
    <Paper sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Typography>Virtuoso Table</Typography>
      <Box flex={1} display="flex" flexDirection="column" minHeight={300}>
        <AutoSizer>
          {({ height, width }) => (
            <TableVirtuoso
              style={{ height, minWidth: width }}
              data={data}
              components={getTableComponents(width, height)}
              fixedHeaderContent={() => (
                <>
                  <TableRow>
                    <TableCell align="center" colSpan={5}>
                      Personal Information
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      Contact Information
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      Timestamp
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map(({ id, label, minWidth, align = "right" }) => (
                      <TableCell
                        key={String(id)}
                        width={minWidth || Sizes.cellMinWidth}
                        align={align}
                      >
                        {label}
                      </TableCell>
                    ))}
                  </TableRow>
                </>
              )}
              itemContent={(index) => <RowContent index={index} />}
            />
          )}
        </AutoSizer>
      </Box>
      <Pagination
        height={Sizes.tablePagination}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default VirtualizedTable;
