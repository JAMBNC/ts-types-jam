import { z } from "zod";
declare const _ShapeIngredient: z.ZodObject<{
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
    type: z.ZodLiteral<"shape">;
    fillColor: z.ZodOptional<import("./Color.js").ColorSchema>;
    invertFill: z.ZodBoolean;
    lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    paths: z.ZodRecord<z.ZodString, import("./Path.js").PathSchema>;
    pathsOrdered: z.ZodArray<z.ZodString>;
    rect: import("./Rect.js").RectSchema;
    strokeColor: z.ZodOptional<import("./Color.js").ColorSchema>;
    strokeWidth: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
}, z.core.$loose>;
type _ShapeIngredientSchema = typeof _ShapeIngredient;
export interface ShapeIngredientSchema extends _ShapeIngredientSchema {
}
/**An ingredient defined by vector paths with optional fill and stroke.*/
export declare const ShapeIngredient: ShapeIngredientSchema;
export type ShapeIngredient = z.infer<typeof ShapeIngredient>;
export {};
//# sourceMappingURL=ShapeIngredient.d.ts.map