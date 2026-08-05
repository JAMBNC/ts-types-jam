import { z } from "zod";
declare const _ShapeIngredient: z.ZodObject<{
    type: z.ZodLiteral<"shape">;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    fillColor: z.ZodOptional<import("./RgbColor.js").RgbColorSchema>;
    id: z.ZodString;
    invertFill: z.ZodBoolean;
    lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    paths: z.ZodRecord<z.ZodString, import("./Path.js").PathSchema>;
    pathsOrdered: z.ZodArray<z.ZodString>;
    rect: import("./Rect.js").RectSchema;
    rotation: z.ZodNumber;
    strokeColor: z.ZodOptional<import("./RgbColor.js").RgbColorSchema>;
    strokeWidth: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
type _ShapeIngredientSchema = typeof _ShapeIngredient;
export interface ShapeIngredientSchema extends _ShapeIngredientSchema {
}
/**An ingredient defined by vector paths with optional fill and stroke.*/
export declare const ShapeIngredient: ShapeIngredientSchema;
export type ShapeIngredient = z.infer<typeof ShapeIngredient>;
export {};
//# sourceMappingURL=ShapeIngredient.d.ts.map