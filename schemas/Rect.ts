import { z } from "zod";
import { Dimension } from "./Dimension.js";

/**A positioned rectangle defined by x, y, width, and height measurements.*/
export const Rect = z
  .object({ x: Dimension, y: Dimension, width: Dimension, height: Dimension })
  .strict()
  .describe(
    "A positioned rectangle defined by x, y, width, and height measurements.",
  );
export type Rect = z.infer<typeof Rect>;
