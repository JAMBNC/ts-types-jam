import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Rect } from "./Rect.js";

const _ChiliAssetIngredient = BaseIngredient.merge(
  z
    .object({
      type: z.literal("chiliAsset"),
      /**A positioned rectangle defined by x, y, width, and height measurements.*/
      rect: Rect,
      asset: z.object({ externalId: z.string(), path: z.string() }).strict(),
    })
    .passthrough(),
).describe("An ingredient for representing chili asset images");
type _ChiliAssetIngredientSchema = typeof _ChiliAssetIngredient;
export interface ChiliAssetIngredientSchema extends _ChiliAssetIngredientSchema {}
/**An ingredient for representing chili asset images*/
export const ChiliAssetIngredient: ChiliAssetIngredientSchema =
  _ChiliAssetIngredient;
export type ChiliAssetIngredient = z.infer<typeof ChiliAssetIngredient>;
