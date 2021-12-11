import { TransitionStatusType } from "./TransitionStatus.type";
import { CSSProperties } from "react";

type TransitionStylesType = Partial<
  Record<TransitionStatusType, CSSProperties>
>;

export type { TransitionStylesType };
