import { z } from "zod";
import { Dimension } from "./Dimension.js";
/**A positioned rectangle defined by x, y, width, and height measurements.*/
export const Rect = z
    .object({
    /**A numeric value with a unit of measurement.*/
    x: Dimension,
    /**A numeric value with a unit of measurement.*/
    y: Dimension,
    /**A numeric value with a unit of measurement.*/
    width: Dimension,
    /**A numeric value with a unit of measurement.*/
    height: Dimension,
})
    .strict()
    .describe("A positioned rectangle defined by x, y, width, and height measurements.");
