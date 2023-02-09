import { Animated } from "../Animated";
import { TBasicAnimateProps } from "../types";

import "./Pop.css";

export const Pop = ({
  children,
  duration = 300,
  isTrigger = true,
}: TBasicAnimateProps) => {
  return (
    <Animated effects={["pop"]} duration={duration} isTrigger={isTrigger}>
      {children}
    </Animated>
  );
};
