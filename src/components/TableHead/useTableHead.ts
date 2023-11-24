import { CSSProperties, ReactNode } from "react";

export interface TableHeadProps {
  style?: CSSProperties | undefined;
  children?: ReactNode;
}

export const useTableHead = (props: TableHeadProps) => {
  return { ...props };
};
