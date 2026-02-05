import { z } from "zod";
import { Dimension } from "./Dimension.js";

/**A bezier curve control point with in-handle, out-handle, and anchor position.*/
export const BezierPoint = z
  .object({
    type: z.literal("bezier"),
    /**A numeric value with a unit of measurement.*/
    ix: Dimension,
    /**A numeric value with a unit of measurement.*/
    iy: Dimension,
    /**A numeric value with a unit of measurement.*/
    ox: Dimension,
    /**A numeric value with a unit of measurement.*/
    oy: Dimension,
    /**A numeric value with a unit of measurement.*/
    x: Dimension,
    /**A numeric value with a unit of measurement.*/
    y: Dimension,
  })
  .strict()
  .describe(
    "A bezier curve control point with in-handle, out-handle, and anchor position.",
  );
export type BezierPoint = z.infer<typeof BezierPoint>;
