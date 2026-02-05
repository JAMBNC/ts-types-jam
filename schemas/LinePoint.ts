import { z } from "zod";
import { Dimension } from "./Dimension.js";

/**A straight line control point with in-handle, out-handle, and anchor position.*/
export const LinePoint = z
  .object({
    type: z.literal("line"),
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
    "A straight line control point with in-handle, out-handle, and anchor position.",
  );
export type LinePoint = z.infer<typeof LinePoint>;
