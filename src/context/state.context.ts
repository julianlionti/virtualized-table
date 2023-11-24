import { Dispatch, createContext } from "react";
import { TableStateActions } from "src/reducers/state.reducer";

export interface TableState<T extends string | number = string | number> {
  editableRows: T[];
}

export const initalTableState: TableState = {
  editableRows: [],
};
//[TableState, Dispatch<AddEditRowAction>]
export const StateContext = createContext<
  [TableState, Dispatch<TableStateActions>]
>([initalTableState, () => {}]);
