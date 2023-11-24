import { TableState } from "src/context/state.context";

type AddEditRowAction<T extends string | number = string | number> = {
  type: "ADD_EDIT_ROW";
  payload: T[];
};
export type TableStateActions = AddEditRowAction;
type StateReducer = (
  state: TableState,
  action: TableStateActions
) => TableState;
export const stateReducer: StateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EDIT_ROW": {
      return { ...state, editableRows: action.payload };
    }
    default:
      return state;
  }
};
