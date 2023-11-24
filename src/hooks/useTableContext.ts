import { TableContext } from "src/context/table.context";
import { use } from "react";

export const useTableContext = () => {
  const {
    columns,
    data,
    getRowId = () => "id",
    rowHeight = () => 50,
  } = use(TableContext);

  return { columns, data, getRowId, rowHeight };
};
