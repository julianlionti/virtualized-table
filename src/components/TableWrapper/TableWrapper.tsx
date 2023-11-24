import { useTableWrapper, TableWrapperProps } from "./useTableWrapper";
import VirtualizedTable from "../VirtualizedTable/VirtualizedTable";
import { ValidRowModel } from "src/helpers/ts.helper";
import TableStateProvider from "src/providers/TableStateProvider/TableStateProvider";
import TableProvider from "src/providers/TableProvider/TableProvider";

const TableWrapper = <T extends ValidRowModel>(props: TableWrapperProps<T>) => {
  const { ...ctxProps } = useTableWrapper(props);
  return (
    <TableProvider {...ctxProps}>
      <TableStateProvider>
        <VirtualizedTable />
      </TableStateProvider>
    </TableProvider>
  );
};

export default TableWrapper;
