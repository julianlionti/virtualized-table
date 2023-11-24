import { StateContext } from "src/context/state.context";
import {
  useTableStateProvider,
  TableStateProviderProps,
} from "./useTableStateProvider";

const TableStateProvider: React.FC<TableStateProviderProps> = (props) => {
  const { children, reducer } = useTableStateProvider(props);
  return (
    <StateContext.Provider value={reducer}>{children}</StateContext.Provider>
  );
};

export default TableStateProvider;
