import { z } from "zod";
declare const _FillIngredient: z.ZodObject<{
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
    type: z.ZodLiteral<"fill">;
    color: import("./Color.js").ColorSchema;
    rect: import("./Rect.js").RectSchema;
}, z.core.$loose>;
type _FillIngredientSchema = typeof _FillIngredient;
export interface FillIngredientSchema extends _FillIngredientSchema {
}
/**An ingredient that fills a rectangular area with a solid color.*/
export declare const FillIngredient: FillIngredientSchema;
export type FillIngredient = z.infer<typeof FillIngredient>;
export {};
//# sourceMappingURL=FillIngredient.d.ts.map