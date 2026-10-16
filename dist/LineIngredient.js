import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Rect } from "./Rect.js";
const _LineIngredient = BaseIngredient.merge(z
    .object({
    type: z.literal("line"),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
})
    .passthrough()).describe("A line ingredient");
/**A line ingredient*/
export const LineIngredient = _LineIngredient;
