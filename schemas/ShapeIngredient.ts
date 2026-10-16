import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Color } from "./Color.js";
import { Dimension } from "./Dimension.js";
import { Path } from "./Path.js";
import { Rect } from "./Rect.js";

const _ShapeIngredient = BaseIngredient.merge(
  z
    .object({
      type: z.literal("shape"),
      fillColor: Color.optional(),
      invertFill: z.boolean(),
      lineDash: z.array(z.number()).optional(),
      /**Map of path IDs to path definitions.*/
      paths: z
        .record(z.string(), Path)
        .describe("Map of path IDs to path definitions."),
      /**Ordered list of path IDs.*/
      pathsOrdered: z.array(z.string()).describe("Ordered list of path IDs."),
      /**A positioned rectangle defined by x, y, width, and height measurements.*/
      rect: Rect,
      strokeColor: Color.optional(),
      strokeWidth: Dimension.optional(),
    })
    .passthrough(),
).describe(
  "An ingredient defined by vector paths with optional fill and stroke.",
);
type _ShapeIngredientSchema = typeof _ShapeIngredient;
export interface ShapeIngredientSchema extends _ShapeIngredientSchema {}
/**An ingredient defined by vector paths with optional fill and stroke.*/
export const ShapeIngredient: ShapeIngredientSchema = _ShapeIngredient;
export type ShapeIngredient = z.infer<typeof ShapeIngredient>;
