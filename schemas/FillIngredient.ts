import { z } from "zod";
import { Rect } from "./Rect.js";
import { RgbColor } from "./RgbColor.js";
import { ViewLayer } from "./ViewLayer.js";

/**An ingredient that fills a rectangular area with a solid color.*/
export const FillIngredient = z
  .object({
    type: z.literal("fill"),
    /**A color with name, hex code, and optional RGBA components.*/
    color: RgbColor,
    dropshadow: z.boolean().optional(),
    editable: z.boolean().optional(),
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
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
    textureMask: z.boolean().optional(),
    validatorBoundingShape: z.boolean().optional(),
    /**The view layer this ingredient belongs to.*/
    viewLayer: z
      .union([z.null(), ViewLayer])
      .describe("The view layer this ingredient belongs to."),
    zIndex: z.number().int(),
  })
  .strict()
  .describe("An ingredient that fills a rectangular area with a solid color.");
export type FillIngredient = z.infer<typeof FillIngredient>;
