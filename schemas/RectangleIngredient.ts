import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { Rect } from "./Rect.js";
import { RgbColor } from "./RgbColor.js";
import { ViewLayer } from "./ViewLayer.js";

/**A rectangular ingredient with optional fill, stroke, and corner radius.*/
export const RectangleIngredient = z
  .object({
    type: z.literal("rectangle"),
    dropshadow: z.boolean().optional(),
    editable: z.boolean().optional(),
    /**A color with name, hex code, and optional RGBA components.*/
    fillColor: RgbColor.optional(),
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    invertFill: z.boolean().optional(),
    lineDash: z.array(z.number()).optional(),
    /**Arbitrary metadata.*/
    metadata: z
      .record(z.string(), z.any())
      .describe("Arbitrary metadata.")
      .optional(),
    opacity: z.number().gte(0).lte(1),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees."),
    /**A color with name, hex code, and optional RGBA components.*/
    strokeColor: RgbColor.optional(),
    strokeCornerRadius: Dimension.optional(),
    strokeWidth: Dimension.optional(),
    textureMask: z.boolean().optional(),
    validatorBoundingShape: z.boolean().optional(),
    viewLayer: ViewLayer.optional(),
    zIndex: z.number().int(),
  })
  .strict()
  .describe(
    "A rectangular ingredient with optional fill, stroke, and corner radius.",
  );
export type RectangleIngredient = z.infer<typeof RectangleIngredient>;
