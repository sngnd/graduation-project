import { ReactNode } from "react";

export interface INavigationLinkProps {
  children: ReactNode;
  externalLink?: boolean;
  openInNewTab?: boolean;
  onClick?: (e: any | undefined) => void;
  href: string;
  color?: string;
  hoverColor?: string;
  className?: string;
}

export interface INavigationLinkStylesProps {
  color?: string;
  hoverColor?: string;
}
