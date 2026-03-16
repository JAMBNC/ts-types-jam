import { z } from "zod";
import { Dimension } from "./Dimension.js";

/**A straight line control point with in-handle, out-handle, and anchor position.*/
export const LinePoint = z
  .object({
    type: z.literal("line"),
    ix: Dimension,
    iy: Dimension,
    ox: Dimension,
    oy: Dimension,
    x: Dimension,
    y: Dimension,
  })
  .strict()
  .describe(
    "A straight line control point with in-handle, out-handle, and anchor position.",
  );
export type LinePoint = z.infer<typeof LinePoint>;
