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
})
    .passthrough()).describe("An ingredient that renders an inline SVG document carried in the ingredient itself. Restricted to a simple supported subset (svg, g, path and basic shapes; no transforms, animation or authored styles). Colors are referenced by class name c-<color uuid> and resolved through metadata.colors; the colors' hex values are mirrored in a managed style block. See isInlineSvgSupported in @jambnc/common.");
/**An ingredient that renders an inline SVG document carried in the ingredient itself. Restricted to a simple supported subset (svg, g, path and basic shapes; no transforms, animation or authored styles). Colors are referenced by class name c-<color uuid> and resolved through metadata.colors; the colors' hex values are mirrored in a managed style block. See isInlineSvgSupported in @jambnc/common.*/
export const SvgIngredient = _SvgIngredient;
