import { z } from "zod";
declare const _SvgIngredient: z.ZodObject<{
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    slot: z.ZodOptional<import("./Slot.js").SlotSchema>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    rotation: z.ZodNumber;
    editable: z.ZodOptional<z.ZodBoolean>;
    restrictions: z.ZodOptional<import("./IngredientRestrictions.js").IngredientRestrictionsSchema>;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    simulated: z.ZodOptional<z.ZodBoolean>;
    clip: z.ZodOptional<z.ZodArray<import("./ClipStep.js").ClipStepSchema>>;
    type: z.ZodLiteral<"svg">;
    rect: import("./Rect.js").RectSchema;
    svg: z.ZodString;
    requiresContentUpdateToCart: z.ZodOptional<z.ZodBoolean>;
}, z.core.$loose>;
type _SvgIngredientSchema = typeof _SvgIngredient;
export interface SvgIngredientSchema extends _SvgIngredientSchema {
}
/**An ingredient that renders an inline SVG document carried in the ingredient itself. The SVG states no colour: it is painted in the single colour given by metadata.colors. What the SVG was generated from (for a barcode: format and encoded data) is recorded in metadata.barcode.*/
export declare const SvgIngredient: SvgIngredientSchema;
export type SvgIngredient = z.infer<typeof SvgIngredient>;
export {};
//# sourceMappingURL=SvgIngredient.d.ts.map