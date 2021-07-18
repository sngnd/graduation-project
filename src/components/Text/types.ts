import { ReactNode } from "react";

export interface ITextProps {
  children: ReactNode;
  variant: string;
  color: string;
  className?: string;
}

export interface ITextStylesProps {
  color: string;
}
