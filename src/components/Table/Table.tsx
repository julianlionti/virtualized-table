import { useTable, TableProps } from "./useTable";
import { Table as MUITable } from "@mui/material";

const Table: React.FC<TableProps> = (props) => {
  const { children, style, tableWidth } = useTable(props);
  return (
    <MUITable
      style={style}
      sx={({ palette }) => ({
        tableLayout: "fixed",
        width: tableWidth,
        "tbody > tr:nth-of-type(even)": {
          backgroundColor: palette.grey[200],
        },
      })}
    >
      <caption>A basic table example with a caption</caption>
      {children}
    </MUITable>
  );
};

export default Table;
