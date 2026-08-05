import { z } from "zod";
declare const _ChiliAssetIngredient: z.ZodObject<{
    type: z.ZodLiteral<"chiliAsset">;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    rect: import("./Rect.js").RectSchema;
    asset: z.ZodObject<{
        externalId: z.ZodString;
        path: z.ZodString;
    }, z.core.$strict>;
    rotation: z.ZodNumber;
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<import("./ViewLayer.js").ViewLayerSchema>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
type _ChiliAssetIngredientSchema = typeof _ChiliAssetIngredient;
export interface ChiliAssetIngredientSchema extends _ChiliAssetIngredientSchema {
}
/**An ingredient for representing chili asset images*/
export declare const ChiliAssetIngredient: ChiliAssetIngredientSchema;
export type ChiliAssetIngredient = z.infer<typeof ChiliAssetIngredient>;
export {};
//# sourceMappingURL=ChiliAssetIngredient.d.ts.map