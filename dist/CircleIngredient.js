import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Color } from "./Color.js";
import { Dimension } from "./Dimension.js";
import { Rect } from "./Rect.js";
const _CircleIngredient = BaseIngredient.merge(z
    .object({
    type: z.literal("circle"),
    fillColor: Color.optional(),
    invertFill: z.boolean().optional(),
    lineDash: z.array(z.number()).optional(),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
    radius: z.object({ x: Dimension, y: Dimension }).strict(),
    strokeColor: Color.optional(),
    strokeWidth: Dimension.optional(),
})
    .passthrough()).describe("A circle ingredient with fill and stroke.");
/**A circle ingredient with fill and stroke.*/
export const CircleIngredient = _CircleIngredient;
