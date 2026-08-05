import { z } from "zod";
declare const _TextIngredient: z.ZodObject<{
    type: z.ZodLiteral<"text">;
    allowRewrite: z.ZodOptional<z.ZodBoolean>;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    rect: import("./Rect.js").RectSchema;
    rotation: z.ZodNumber;
    text: import("./TextProperties.js").TextPropertiesSchema;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
type _TextIngredientSchema = typeof _TextIngredient;
export interface TextIngredientSchema extends _TextIngredientSchema {
}
/**An ingredient that renders text content with font and style properties.*/
export declare const TextIngredient: TextIngredientSchema;
export type TextIngredient = z.infer<typeof TextIngredient>;
export {};
//# sourceMappingURL=TextIngredient.d.ts.map