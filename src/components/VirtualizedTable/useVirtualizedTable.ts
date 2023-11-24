import { createElement, useCallback, useState } from "react";
import { TableComponents } from "react-virtuoso";
import { useTableContext } from "src/hooks/useTableContext";
import TableContainer from "../TableContainer/TableContainer";
import Table from "../Table/Table";
import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";
import TableRow from "../TableRow/TableRow";
import EmptyTable from "../EmptyTable/EmptyTable";

export interface VirtualizedTableProps {}

export const useVirtualizedTable = (props: VirtualizedTableProps) => {
  const {} = props;
  const { data, columns } = useTableContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getTableComponents = useCallback(
    (containerWidth: number, containerHeight: number): TableComponents => ({
      Scroller: TableContainer,
      Table: (tableProps) =>
        createElement(Table, { ...tableProps, containerWidth }),
      TableHead,
      TableRow,
      TableBody,
      EmptyPlaceholder: () => createElement(EmptyTable, { containerHeight }),
    }),
    []
  );

  return {
    data,
    page,
    rowsPerPage,
    columns,
    handleChangePage,
    handleChangeRowsPerPage,
    getTableComponents,
  };
};
