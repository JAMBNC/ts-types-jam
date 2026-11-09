import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Rect } from "./Rect.js";
import { TextProperties } from "./TextProperties.js";
const _TextIngredient = BaseIngredient.merge(z
    .object({
    type: z.literal("text"),
    allowRewrite: z.boolean().optional(),
    /**When true, the body must be updated before the design can continue to cart under normal circumstances. Cleared automatically on any body update. Stripped from plain orders.*/
    requiresContentUpdateToCart: z
        .boolean()
        .describe("When true, the body must be updated before the design can continue to cart under normal circumstances. Cleared automatically on any body update. Stripped from plain orders.")
        .optional(),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
    /**Properties for displayed text*/
    text: TextProperties,
})
    .passthrough()).describe("An ingredient that renders text content with font and style properties.");
/**An ingredient that renders text content with font and style properties.*/
export const TextIngredient = _TextIngredient;
