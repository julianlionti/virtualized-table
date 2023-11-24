import { Column } from "src/models/column.model";
import { ValidRowModel } from "./ts.helper";
import { Sizes } from "src/constants/sizes";

export const countCellsWidth = (columns: Column<ValidRowModel>[]) =>
  columns.reduce((acc, it) => acc + (it.minWidth || Sizes.cellMinWidth), 0);
