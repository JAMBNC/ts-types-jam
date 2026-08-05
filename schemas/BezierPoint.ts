import { z } from "zod";
import { Dimension } from "./Dimension.js";

const _BezierPoint = z
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
  .describe(
    "A bezier curve control point with in-handle, out-handle, and anchor position.",
  );
type _BezierPointSchema = typeof _BezierPoint;
export interface BezierPointSchema extends _BezierPointSchema {}
/**A bezier curve control point with in-handle, out-handle, and anchor position.*/
export const BezierPoint: BezierPointSchema = _BezierPoint;
export type BezierPoint = z.infer<typeof BezierPoint>;
