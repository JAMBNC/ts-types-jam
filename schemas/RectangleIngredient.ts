import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { Rect } from "./Rect.js";
import { RgbColor } from "./RgbColor.js";

/**A rectangular ingredient with optional fill, stroke, and corner radius.*/
export const RectangleIngredient = z
  .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    type: z.literal("rectangle"),
    /**Arbitrary metadata.*/
    metadata: z.record(z.string(), z.any()).describe("Arbitrary metadata."),
    isNew: z.boolean(),
    /**The view layer this ingredient belongs to.*/
    viewLayer: z
      .union([
        z.string().describe("The view layer this ingredient belongs to."),
        z.null().describe("The view layer this ingredient belongs to."),
      ])
      .describe("The view layer this ingredient belongs to."),
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees."),
    editable: z.boolean().optional(),
    isDirty: z.boolean(),
    simulated: z.boolean(),
    isDropshadow: z.boolean(),
    isTextureMask: z.boolean(),
    isValidatorBoundingShape: z.boolean(),
    opacity: z.number().gte(0).lte(1),
    zIndex: z.number().int(),
    hasFill: z.boolean(),
    fillColor: z.union([RgbColor, z.null()]),
    invertFill: z.boolean(),
    hasStroke: z.boolean(),
    strokeColor: z.union([RgbColor, z.null()]),
    strokeWidth: z.number(),
    lineDash: z.union([z.array(z.number()), z.null()]),
    /**A numeric value with a unit of measurement.*/
    strokeCornerRadius: Dimension,
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
  })
  .strict()
  .describe(
    "A rectangular ingredient with optional fill, stroke, and corner radius.",
  );
export type RectangleIngredient = z.infer<typeof RectangleIngredient>;
