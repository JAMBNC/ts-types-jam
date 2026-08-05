import { z } from "zod";
import { Dimension } from "./Dimension.js";

const _Rect = z
  .object({ height: Dimension, width: Dimension, x: Dimension, y: Dimension })
  .strict()
  .describe(
    "A positioned rectangle defined by x, y, width, and height measurements.",
  );
type _RectSchema = typeof _Rect;
export interface RectSchema extends _RectSchema {}
/**A positioned rectangle defined by x, y, width, and height measurements.*/
export const Rect: RectSchema = _Rect;
export type Rect = z.infer<typeof Rect>;
