import { z } from "zod";
declare const _RectangleIngredient: z.ZodObject<{
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
    type: z.ZodLiteral<"rectangle">;
    fillColor: z.ZodOptional<import("./Color.js").ColorSchema>;
    invertFill: z.ZodOptional<z.ZodBoolean>;
    lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    rect: import("./Rect.js").RectSchema;
    strokeColor: z.ZodOptional<import("./Color.js").ColorSchema>;
    strokeCornerRadius: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    strokeWidth: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
}, z.core.$loose>;
type _RectangleIngredientSchema = typeof _RectangleIngredient;
export interface RectangleIngredientSchema extends _RectangleIngredientSchema {
}
/**A rectangular ingredient with optional fill, stroke, and corner radius.*/
export declare const RectangleIngredient: RectangleIngredientSchema;
export type RectangleIngredient = z.infer<typeof RectangleIngredient>;
export {};
//# sourceMappingURL=RectangleIngredient.d.ts.map