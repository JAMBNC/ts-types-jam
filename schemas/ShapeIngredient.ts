import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { Path } from "./Path.js";
import { Rect } from "./Rect.js";
import { RgbColor } from "./RgbColor.js";
import { ViewLayer } from "./ViewLayer.js";

/**An ingredient defined by vector paths with optional fill and stroke.*/
export const ShapeIngredient = z
  .object({
    type: z.literal("shape"),
    dropshadow: z.boolean().optional(),
    editable: z.boolean().optional(),
    /**A color with name, hex code, and optional RGBA components.*/
    fillColor: RgbColor.optional(),
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    invertFill: z.boolean(),
    lineDash: z.array(z.number()).optional(),
    /**Arbitrary metadata.*/
    metadata: z
      .record(z.string(), z.any())
      .describe("Arbitrary metadata.")
      .optional(),
    opacity: z.number().gte(0).lte(1),
    /**Map of path IDs to path definitions.*/
    paths: z
      .record(z.string(), Path)
      .describe("Map of path IDs to path definitions."),
    /**Ordered list of path IDs.*/
    pathsOrdered: z.array(z.string()).describe("Ordered list of path IDs."),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees."),
    /**A color with name, hex code, and optional RGBA components.*/
    strokeColor: RgbColor.optional(),
    strokeWidth: Dimension.optional(),
    textureMask: z.boolean().optional(),
    validatorBoundingShape: z.boolean().optional(),
    viewLayer: ViewLayer.optional(),
    zIndex: z.number().int(),
  })
  .strict()
  .describe(
    "An ingredient defined by vector paths with optional fill and stroke.",
  );
export type ShapeIngredient = z.infer<typeof ShapeIngredient>;
