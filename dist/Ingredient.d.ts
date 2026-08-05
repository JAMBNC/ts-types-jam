import { z } from "zod";
declare const _Ingredient: z.ZodDiscriminatedUnion<[import("./DataIngredient.js").DataIngredientSchema, import("./FillIngredient.js").FillIngredientSchema, import("./ImageIngredient.js").ImageIngredientSchema, import("./LineIngredient.js").LineIngredientSchema, import("./RectangleIngredient.js").RectangleIngredientSchema, import("./ShapeIngredient.js").ShapeIngredientSchema, import("./TextIngredient.js").TextIngredientSchema, import("./CoatingIngredient.js").CoatingIngredientSchema, import("./CircleIngredient.js").CircleIngredientSchema, import("./ChiliAssetIngredient.js").ChiliAssetIngredientSchema]>;
type _IngredientSchema = typeof _Ingredient;
export interface IngredientSchema extends _IngredientSchema {
}
/**A discriminated union of all supported ingredient types.*/
export declare const Ingredient: IngredientSchema;
export type Ingredient = z.infer<typeof Ingredient>;
export {};
//# sourceMappingURL=Ingredient.d.ts.map