import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Color } from "./Color.js";
import { Rect } from "./Rect.js";

const _FillIngredient = BaseIngredient.merge(
  z
    .object({
      type: z.literal("fill"),
      color: Color,
      /**A positioned rectangle defined by x, y, width, and height measurements.*/
      rect: Rect,
    })
    .passthrough(),
).describe("An ingredient that fills a rectangular area with a solid color.");
type _FillIngredientSchema = typeof _FillIngredient;
export interface FillIngredientSchema extends _FillIngredientSchema {}
/**An ingredient that fills a rectangular area with a solid color.*/
export const FillIngredient: FillIngredientSchema = _FillIngredient;
export type FillIngredient = z.infer<typeof FillIngredient>;
