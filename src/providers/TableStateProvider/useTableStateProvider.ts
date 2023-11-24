import { ReactNode, useReducer } from "react";
import { initalTableState } from "src/context/state.context";
import { stateReducer } from "src/reducers/state.reducer";

export interface TableStateProviderProps {
  children: ReactNode;
}

export const useTableStateProvider = (props: TableStateProviderProps) => {
  const reducer = useReducer(stateReducer, initalTableState);
  return { ...props, reducer };
};
