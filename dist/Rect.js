import { z } from "zod";
import { Dimension } from "./Dimension.js";
/**A positioned rectangle defined by x, y, width, and height measurements.*/
export const Rect = z
    .object({ height: Dimension, width: Dimension, x: Dimension, y: Dimension })
    .strict()
    .describe("A positioned rectangle defined by x, y, width, and height measurements.");
