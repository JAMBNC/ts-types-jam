import { z } from "zod";
declare const _CircleIngredient: z.ZodObject<{
    type: z.ZodLiteral<"circle">;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    fillColor: z.ZodOptional<import("./RgbColor.js").RgbColorSchema>;
    id: z.ZodString;
    invertFill: z.ZodOptional<z.ZodBoolean>;
    lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    rect: import("./Rect.js").RectSchema;
    radius: z.ZodObject<{
        x: import("./Dimension.js").DimensionSchema;
        y: import("./Dimension.js").DimensionSchema;
    }, z.core.$strict>;
    rotation: z.ZodNumber;
    strokeColor: z.ZodOptional<import("./RgbColor.js").RgbColorSchema>;
    strokeWidth: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
type _CircleIngredientSchema = typeof _CircleIngredient;
export interface CircleIngredientSchema extends _CircleIngredientSchema {
}
/**A circle ingredient with fill and stroke.*/
export declare const CircleIngredient: CircleIngredientSchema;
export type CircleIngredient = z.infer<typeof CircleIngredient>;
export {};
//# sourceMappingURL=CircleIngredient.d.ts.map