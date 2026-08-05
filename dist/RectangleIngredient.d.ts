import { z } from "zod";
declare const _RectangleIngredient: z.ZodObject<{
    type: z.ZodLiteral<"rectangle">;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    fillColor: z.ZodOptional<import("./RgbColor.js").RgbColorSchema>;
    id: z.ZodString;
    invertFill: z.ZodOptional<z.ZodBoolean>;
    lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    rect: import("./Rect.js").RectSchema;
    rotation: z.ZodNumber;
    strokeColor: z.ZodOptional<import("./RgbColor.js").RgbColorSchema>;
    strokeCornerRadius: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    strokeWidth: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
type _RectangleIngredientSchema = typeof _RectangleIngredient;
export interface RectangleIngredientSchema extends _RectangleIngredientSchema {
}
/**A rectangular ingredient with optional fill, stroke, and corner radius.*/
export declare const RectangleIngredient: RectangleIngredientSchema;
export type RectangleIngredient = z.infer<typeof RectangleIngredient>;
export {};
//# sourceMappingURL=RectangleIngredient.d.ts.map