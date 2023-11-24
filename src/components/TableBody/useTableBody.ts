import { CSSProperties, ReactNode } from "react";

export interface TableBodyProps {
  style?: CSSProperties | undefined;
  children?: ReactNode;
}

export const useTableBody = (props: TableBodyProps) => {
  const { children, style } = props;
  return { children, style };
};
