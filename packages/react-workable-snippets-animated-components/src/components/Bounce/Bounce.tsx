import { Animated } from "../Animated";
import { TBasicAnimateProps } from "../types";

import "./Bounce.css";

export const Bounce = ({
  children,
  duration,
  isTrigger,
}: TBasicAnimateProps) => {
  return (
    <Animated effects={["bounce"]} duration={duration} isTrigger={isTrigger}>
      {children}
    </Animated>
  );
};
