import { TextField } from "@mui/material";
import { useTableEditString, TableEditStringProps } from "./useTableEditString";
import { ValidRowModel } from "src/helpers/ts.helper";

const TableEditString = <T extends ValidRowModel>(
  props: TableEditStringProps<T>
) => {
  const { label, cellValue, isEditable } = useTableEditString(props);
  return (
    <TextField
      size="small"
      variant="filled"
      disabled={isEditable === false}
      label={label}
      value={cellValue}
    />
  );
};

export default TableEditString;
