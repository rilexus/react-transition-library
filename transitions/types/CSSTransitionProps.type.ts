import { CSSProperties, ReactElement } from "react";

type CSSTransitionProps = {
  children: ReactElement;
  classNames?: string;
  in?: boolean;
  timeout: number;
  delay?: number;
  appear?: boolean;
  style?: CSSProperties;
  [key: string]: any;
};
export type { CSSTransitionProps };
