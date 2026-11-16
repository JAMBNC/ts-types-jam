import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Rect } from "./Rect.js";
const _SvgIngredient = BaseIngredient.merge(z
    .object({
    type: z.literal("svg"),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
    /**The SVG markup.*/
    svg: z.string().describe("The SVG markup."),
    /**When true, the svg must be updated before the design can continue to cart under normal circumstances. Cleared automatically on any svg update. Stripped from plain orders.*/
    requiresContentUpdateToCart: z
        .boolean()
        .describe("When true, the svg must be updated before the design can continue to cart under normal circumstances. Cleared automatically on any svg update. Stripped from plain orders.")
        .optional(),
})
    .passthrough()).describe("An ingredient that renders an inline SVG document carried in the ingredient itself. The SVG states no colour: it is painted in the single colour given by metadata.colors. What the SVG was generated from (for a barcode: format and encoded data) is recorded in metadata.barcode.");
/**An ingredient that renders an inline SVG document carried in the ingredient itself. The SVG states no colour: it is painted in the single colour given by metadata.colors. What the SVG was generated from (for a barcode: format and encoded data) is recorded in metadata.barcode.*/
export const SvgIngredient = _SvgIngredient;
