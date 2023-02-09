import "./Animated.css";
import { effectsMapping } from "./utils";
import { TAnimateEffect, TBasicAnimateProps } from "./types";

type TAnimatedProps = {
  effects: TAnimateEffect[];
} & TBasicAnimateProps;

export const Animated = ({
  children,
  effects,
  isTrigger = true,
  duration = 300,
}: TAnimatedProps) => {
  let className = "";

  effects?.forEach((val) => {
    if (isTrigger) {
      className += " " + effectsMapping[val];
    }
  });

  return (
    <div
      style={{ animationDuration: className ? duration + "ms" : "" }}
      className={className}
    >
      {children}
    </div>
  );
};
