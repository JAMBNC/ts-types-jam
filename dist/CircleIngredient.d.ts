import { z } from "zod";
declare const _CircleIngredient: z.ZodObject<{
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
    type: z.ZodLiteral<"circle">;
    fillColor: z.ZodOptional<import("./Color.js").ColorSchema>;
    invertFill: z.ZodOptional<z.ZodBoolean>;
    lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    rect: import("./Rect.js").RectSchema;
    radius: z.ZodObject<{
        x: import("./Dimension.js").DimensionSchema;
        y: import("./Dimension.js").DimensionSchema;
    }, z.core.$strict>;
    strokeColor: z.ZodOptional<import("./Color.js").ColorSchema>;
    strokeWidth: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
}, z.core.$loose>;
type _CircleIngredientSchema = typeof _CircleIngredient;
export interface CircleIngredientSchema extends _CircleIngredientSchema {
}
/**A circle ingredient with fill and stroke.*/
export declare const CircleIngredient: CircleIngredientSchema;
export type CircleIngredient = z.infer<typeof CircleIngredient>;
export {};
//# sourceMappingURL=CircleIngredient.d.ts.map