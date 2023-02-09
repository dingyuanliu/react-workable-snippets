import { ReactNode } from "react";

export type TBasicAnimateProps = {
  children: ReactNode;
  duration?: number;
  isTrigger?: boolean;
};

export type TAnimateEffect = "bounce" | "pop" | "shake";
