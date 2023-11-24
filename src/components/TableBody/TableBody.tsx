import { forwardRef } from "react";
import { useTableBody, TableBodyProps } from "./useTableBody";
import { TableBody as MUITableBody } from "@mui/material";

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    const { children, style } = useTableBody(props);
    return (
      <MUITableBody ref={ref} style={style}>
        {children}
      </MUITableBody>
    );
  }
);

export default TableBody;
