import { forwardRef } from "react";
import { useTableHead, TableHeadProps } from "./useTableHead";
import { TableHead as MUITableHead } from "@mui/material";

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  (props, ref) => {
    const { children, style } = useTableHead(props);
    return (
      <MUITableHead
        ref={ref}
        style={style}
        sx={({ palette }) => ({
          backgroundColor: palette.primary.main,
          th: {
            fontWeight: 700,
            color: palette.getContrastText(palette.primary.main),
          },
          tr: { outline: `1px solid ${palette.primary.main}` },
        })}
      >
        {children}
      </MUITableHead>
    );
  }
);

export default TableHead;
