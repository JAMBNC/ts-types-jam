import { z } from "zod";
declare const _ImageIngredient: z.ZodObject<{
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
    type: z.ZodLiteral<"image">;
    naturalHeight: z.ZodOptional<z.ZodNumber>;
    naturalWidth: z.ZodOptional<z.ZodNumber>;
    rect: import("./Rect.js").RectSchema;
    imageRect: z.ZodOptional<import("./Rect.js").RectSchema>;
    legacyPixelData: z.ZodOptional<z.ZodObject<{
        realWidthPixels: z.ZodOptional<z.ZodNumber>;
        realHeightPixels: z.ZodOptional<z.ZodNumber>;
        imgWidthPixels: z.ZodOptional<z.ZodNumber>;
        imgHeightPixels: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    src: z.ZodString;
}, z.core.$loose>;
type _ImageIngredientSchema = typeof _ImageIngredient;
export interface ImageIngredientSchema extends _ImageIngredientSchema {
}
/**An ingredient that renders a raster image.*/
export declare const ImageIngredient: ImageIngredientSchema;
export type ImageIngredient = z.infer<typeof ImageIngredient>;
export {};
//# sourceMappingURL=ImageIngredient.d.ts.map