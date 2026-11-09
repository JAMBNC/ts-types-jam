import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Rect } from "./Rect.js";

const _SvgIngredient = BaseIngredient.merge(
  z
    .object({
      type: z.literal("svg"),
      /**A positioned rectangle defined by x, y, width, and height measurements.*/
      rect: Rect,
      /**The SVG markup.*/
      svg: z.string().describe("The SVG markup."),
      /**When true, the svg must be updated before the design can continue to cart under normal circumstances. Cleared automatically on any svg update. Stripped from plain orders.*/
      requiresContentUpdateToCart: z
        .boolean()
        .describe(
          "When true, the svg must be updated before the design can continue to cart under normal circumstances. Cleared automatically on any svg update. Stripped from plain orders.",
        )
        .optional(),
    })
    .passthrough(),
).describe(
  "An ingredient that renders an inline SVG document carried in the ingredient itself. Restricted to a simple supported subset (svg, g, path and basic shapes; no transforms, animation or authored styles). Colors are referenced by class name c-<color uuid> and resolved through metadata.colors; the colors' hex values are mirrored in a managed style block. See isInlineSvgSupported in @jambnc/common.",
);
type _SvgIngredientSchema = typeof _SvgIngredient;
export interface SvgIngredientSchema extends _SvgIngredientSchema {}
/**An ingredient that renders an inline SVG document carried in the ingredient itself. Restricted to a simple supported subset (svg, g, path and basic shapes; no transforms, animation or authored styles). Colors are referenced by class name c-<color uuid> and resolved through metadata.colors; the colors' hex values are mirrored in a managed style block. See isInlineSvgSupported in @jambnc/common.*/
export const SvgIngredient: SvgIngredientSchema = _SvgIngredient;
export type SvgIngredient = z.infer<typeof SvgIngredient>;
