import { CSSProperties, ReactNode } from "react";

export interface TableContainerProps {
  style?: CSSProperties | undefined;
  children?: ReactNode;
}

export const useTableContainer = (props: TableContainerProps) => {
  return { ...props };
};
