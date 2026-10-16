import { z } from "zod";
declare const _ChiliAssetIngredient: z.ZodObject<{
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
    type: z.ZodLiteral<"chiliAsset">;
    rect: import("./Rect.js").RectSchema;
    asset: z.ZodObject<{
        externalId: z.ZodString;
        path: z.ZodString;
    }, z.core.$strict>;
}, z.core.$loose>;
type _ChiliAssetIngredientSchema = typeof _ChiliAssetIngredient;
export interface ChiliAssetIngredientSchema extends _ChiliAssetIngredientSchema {
}
/**An ingredient for representing chili asset images*/
export declare const ChiliAssetIngredient: ChiliAssetIngredientSchema;
export type ChiliAssetIngredient = z.infer<typeof ChiliAssetIngredient>;
export {};
//# sourceMappingURL=ChiliAssetIngredient.d.ts.map