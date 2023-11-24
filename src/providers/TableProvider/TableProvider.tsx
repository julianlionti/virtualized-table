import { TableContext } from "src/context/table.context";
import { useTableProvider, TableProviderProps } from "./useTableProvider";
import { ValidRowModel } from "src/helpers/ts.helper";

const TableProvider = <T extends ValidRowModel>(
  props: TableProviderProps<T>
) => {
  const { children, ...value } = useTableProvider(props);
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export default TableProvider;
