import { createContext } from "react";
import { Sizes } from "src/constants/sizes";
import { ValidRowModel } from "src/helpers/ts.helper";
import { Column } from "src/models/column.model";

export interface TableContext<T extends ValidRowModel> {
  columns: Column<T>[];
  data: T[];
  editable?: boolean;
  getRowId: () => keyof T;
  rowHeight?: (index: number) => number;
  headerHeight?: (index: number) => number;
}

const initialTableContext: TableContext<ValidRowModel> = {
  columns: [],
  data: [],
  editable: true,
  getRowId: () => "id",
  rowHeight: () => Sizes.tableRowHeight,
  headerHeight: () => Sizes.tableHeaderRowHeight,
};

export const TableContext =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createContext<TableContext<any>>(initialTableContext);
