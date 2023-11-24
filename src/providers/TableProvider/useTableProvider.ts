import { ReactNode } from "react";
import { TableContext } from "src/context/table.context";
import { ValidRowModel } from "src/helpers/ts.helper";

export interface TableProviderProps<T extends ValidRowModel>
  extends TableContext<T> {
  children: ReactNode;
}

export const useTableProvider = <T extends ValidRowModel>(
  props: TableProviderProps<T>
) => {
  console.log({ value: props });

  return { ...props };
};
