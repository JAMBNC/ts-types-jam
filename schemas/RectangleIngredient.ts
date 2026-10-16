import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Color } from "./Color.js";
import { Dimension } from "./Dimension.js";
import { Rect } from "./Rect.js";

const _RectangleIngredient = BaseIngredient.merge(
  z
    .object({
      type: z.literal("rectangle"),
      fillColor: Color.optional(),
      invertFill: z.boolean().optional(),
      lineDash: z.array(z.number()).optional(),
      /**A positioned rectangle defined by x, y, width, and height measurements.*/
      rect: Rect,
      strokeColor: Color.optional(),
      strokeCornerRadius: Dimension.optional(),
      strokeWidth: Dimension.optional(),
    })
    .passthrough(),
).describe(
  "A rectangular ingredient with optional fill, stroke, and corner radius.",
);
type _RectangleIngredientSchema = typeof _RectangleIngredient;
export interface RectangleIngredientSchema extends _RectangleIngredientSchema {}
/**A rectangular ingredient with optional fill, stroke, and corner radius.*/
export const RectangleIngredient: RectangleIngredientSchema =
  _RectangleIngredient;
export type RectangleIngredient = z.infer<typeof RectangleIngredient>;
