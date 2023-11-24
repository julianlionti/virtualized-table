import { use } from "react";
import { StateContext } from "src/context/state.context";
import { ValidRowModel } from "src/helpers/ts.helper";

export const useTableStateContext = () => {
  const [state, dispatch] = use(StateContext);
  const { editableRows } = state;

  const addEditRowState = (row: ValidRowModel) => {
    const current = editableRows.includes(row.id);
    if (!current)
      dispatch({ type: "ADD_EDIT_ROW", payload: [...editableRows, row.id] });
  };

  const removeEditRowState = (row: ValidRowModel) => {
    const current = editableRows.includes(row.id);
    if (current)
      dispatch({
        type: "ADD_EDIT_ROW",
        payload: editableRows.filter((e) => e !== row.id),
      });
  };

  return { ...state, addEditRowState, removeEditRowState };
};
