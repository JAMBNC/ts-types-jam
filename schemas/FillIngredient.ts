import { z } from "zod";
import { Rect } from "./Rect.js";
import { RgbColor } from "./RgbColor.js";

/**An ingredient that fills a rectangular area with a solid color.*/
export const FillIngredient = z
  .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    type: z.literal("fill"),
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
    /**A color with name, hex code, and optional RGBA components.*/
    color: RgbColor,
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
  })
  .strict()
  .describe("An ingredient that fills a rectangular area with a solid color.");
export type FillIngredient = z.infer<typeof FillIngredient>;
