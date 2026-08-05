import { z } from "zod";
declare const _FillIngredient: z.ZodObject<{
    type: z.ZodLiteral<"fill">;
    color: import("./RgbColor.js").RgbColorSchema;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    rect: import("./Rect.js").RectSchema;
    rotation: z.ZodNumber;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
type _FillIngredientSchema = typeof _FillIngredient;
export interface FillIngredientSchema extends _FillIngredientSchema {
}
/**An ingredient that fills a rectangular area with a solid color.*/
export declare const FillIngredient: FillIngredientSchema;
export type FillIngredient = z.infer<typeof FillIngredient>;
export {};
//# sourceMappingURL=FillIngredient.d.ts.map