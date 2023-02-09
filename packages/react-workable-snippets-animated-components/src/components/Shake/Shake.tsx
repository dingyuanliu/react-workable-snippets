import { Animated } from "../Animated";
import { TBasicAnimateProps } from "../types";

import "./Shake.css";

export const Shake = ({
  children,
  duration,
  isTrigger,
}: TBasicAnimateProps) => {
  return (
    <Animated effects={["shake"]} duration={duration} isTrigger={isTrigger}>
      {children}
    </Animated>
  );
};
