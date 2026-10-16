import { z } from "zod";
declare const _LineIngredient: z.ZodObject<{
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
    type: z.ZodLiteral<"line">;
    rect: import("./Rect.js").RectSchema;
}, z.core.$loose>;
type _LineIngredientSchema = typeof _LineIngredient;
export interface LineIngredientSchema extends _LineIngredientSchema {
}
/**A line ingredient*/
export declare const LineIngredient: LineIngredientSchema;
export type LineIngredient = z.infer<typeof LineIngredient>;
export {};
//# sourceMappingURL=LineIngredient.d.ts.map