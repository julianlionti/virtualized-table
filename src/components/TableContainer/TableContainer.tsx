import { forwardRef } from "react";
import { useTableContainer, TableContainerProps } from "./useTableContainer";
import { TableContainer as MUITableContainer } from "@mui/material";

const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(
  (props, ref) => {
    const { children, ...rest } = useTableContainer(props);
    return (
      <MUITableContainer {...rest} ref={ref}>
        {children}
      </MUITableContainer>
    );
  }
);

export default TableContainer;
