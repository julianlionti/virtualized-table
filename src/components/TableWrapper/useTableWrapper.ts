import { TableContext } from "src/context/table.context";
import { VirtualizedTableProps } from "../VirtualizedTable/useVirtualizedTable";
import { ValidRowModel } from "src/helpers/ts.helper";

export type TableWrapperProps<T extends ValidRowModel> = TableContext<T> &
  VirtualizedTableProps;

export const useTableWrapper = <T extends ValidRowModel>(
  props: TableWrapperProps<T>
) => {
  return { ...props };
};
