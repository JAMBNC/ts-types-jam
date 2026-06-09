import { z } from "zod";
import { Rect } from "./Rect.js";
import { TextProperties } from "./TextProperties.js";
import { ViewLayer } from "./ViewLayer.js";

/**An ingredient that renders text content with font and style properties.*/
export const TextIngredient = z
  .object({
    type: z.literal("text"),
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
    /**Properties for displayed text*/
    text: TextProperties,
    textureMask: z.boolean().optional(),
    validatorBoundingShape: z.boolean().optional(),
    /**The view layer this ingredient belongs to.*/
    viewLayer: z
      .union([z.null(), ViewLayer])
      .describe("The view layer this ingredient belongs to."),
    zIndex: z.number().int(),
  })
  .strict()
  .describe(
    "An ingredient that renders text content with font and style properties.",
  );
export type TextIngredient = z.infer<typeof TextIngredient>;
