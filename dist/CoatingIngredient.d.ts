import { z } from "zod";
declare const _CoatingIngredient: z.ZodObject<{
    id: z.ZodString;
    rect: z.ZodOptional<import("./Rect.js").RectSchema>;
    type: z.ZodLiteral<"coating">;
    editable: z.ZodOptional<z.ZodBoolean>;
    restrictions: z.ZodOptional<import("./IngredientRestrictions.js").IngredientRestrictionsSchema>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    code: z.ZodString;
    opacity: z.ZodOptional<z.ZodNumber>;
    slot: z.ZodOptional<import("./Slot.js").SlotSchema>;
    texture: z.ZodOptional<z.ZodUnion<readonly [import("./TextureColor.js").TextureColorSchema, import("./TextureImage.js").TextureImageSchema]>>;
    zIndex: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
type _CoatingIngredientSchema = typeof _CoatingIngredient;
export interface CoatingIngredientSchema extends _CoatingIngredientSchema {
}
/**Ingredient for coatings that cover an entire page.*/
export declare const CoatingIngredient: CoatingIngredientSchema;
export type CoatingIngredient = z.infer<typeof CoatingIngredient>;
export {};
//# sourceMappingURL=CoatingIngredient.d.ts.map