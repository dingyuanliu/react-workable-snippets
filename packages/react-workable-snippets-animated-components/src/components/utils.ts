import { TAnimateEffect } from "./types";

/**
 * Key: animation type
 * Value: corresponding css class defined in the file `Animated.css`
 */
export const effectsMapping: Record<TAnimateEffect, string> = {
  bounce: "bounce",
  pop: "pop",
  shake: "shake",
};
