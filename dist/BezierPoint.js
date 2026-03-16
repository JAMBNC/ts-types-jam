import { z } from "zod";
import { Dimension } from "./Dimension.js";
/**A bezier curve control point with in-handle, out-handle, and anchor position.*/
export const BezierPoint = z
    .object({
    type: z.literal("bezier"),
    ix: Dimension,
    iy: Dimension,
    ox: Dimension,
    oy: Dimension,
    x: Dimension,
    y: Dimension,
})
    .strict()
    .describe("A bezier curve control point with in-handle, out-handle, and anchor position.");
