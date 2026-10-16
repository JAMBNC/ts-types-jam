import { z } from "zod";
declare const _TextIngredient: z.ZodObject<{
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
    type: z.ZodLiteral<"text">;
    allowRewrite: z.ZodOptional<z.ZodBoolean>;
    rect: import("./Rect.js").RectSchema;
    text: import("./TextProperties.js").TextPropertiesSchema;
}, z.core.$loose>;
type _TextIngredientSchema = typeof _TextIngredient;
export interface TextIngredientSchema extends _TextIngredientSchema {
}
/**An ingredient that renders text content with font and style properties.*/
export declare const TextIngredient: TextIngredientSchema;
export type TextIngredient = z.infer<typeof TextIngredient>;
export {};
//# sourceMappingURL=TextIngredient.d.ts.map