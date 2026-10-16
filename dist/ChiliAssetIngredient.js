import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Rect } from "./Rect.js";
const _ChiliAssetIngredient = BaseIngredient.merge(z
    .object({
    type: z.literal("chiliAsset"),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
    asset: z.object({ externalId: z.string(), path: z.string() }).strict(),
})
    .passthrough()).describe("An ingredient for representing chili asset images");
/**An ingredient for representing chili asset images*/
export const ChiliAssetIngredient = _ChiliAssetIngredient;
