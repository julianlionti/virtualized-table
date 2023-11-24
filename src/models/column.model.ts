import { ReactNode } from "react";

export interface Column<T extends Record<string, unknown>> {
  id: keyof T;
  label: string;
  minWidth?: number;
  align?: "left" | "center" | "right" | "justify" | "inherit" | undefined;
  isEditable?: boolean;
  format?: (value: number) => string;
  renderHeaderCell?: <V>(cell: V, row: T) => ReactNode;
}
