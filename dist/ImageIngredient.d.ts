import { z } from "zod";
declare const _ImageIngredient: z.ZodObject<{
    type: z.ZodLiteral<"image">;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    naturalHeight: z.ZodOptional<z.ZodNumber>;
    naturalWidth: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodNumber;
    rect: import("./Rect.js").RectSchema;
    imageRect: z.ZodOptional<import("./Rect.js").RectSchema>;
    legacyPixelData: z.ZodOptional<z.ZodObject<{
        realWidthPixels: z.ZodOptional<z.ZodNumber>;
        realHeightPixels: z.ZodOptional<z.ZodNumber>;
        imgWidthPixels: z.ZodOptional<z.ZodNumber>;
        imgHeightPixels: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    rotation: z.ZodNumber;
    src: z.ZodString;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
type _ImageIngredientSchema = typeof _ImageIngredient;
export interface ImageIngredientSchema extends _ImageIngredientSchema {
}
/**An ingredient that renders a raster image.*/
export declare const ImageIngredient: ImageIngredientSchema;
export type ImageIngredient = z.infer<typeof ImageIngredient>;
export {};
//# sourceMappingURL=ImageIngredient.d.ts.map