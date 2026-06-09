import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { ViewLayer } from "./ViewLayer.js";

/**An ingredient that holds a generic data payload such as textures or backgrounds.*/
export const DataIngredient = z
  .object({
    type: z.literal("data"),
    /**The data payload describing the content.*/
    data: z
      .object({
        height: Dimension.optional(),
        layerName: z.string().optional(),
        path: z.string().optional(),
        tag: z.string().optional(),
        width: Dimension.optional(),
        x: Dimension.optional(),
        y: Dimension.optional(),
        additionalProperties: z.record(z.string(), z.any()).optional(),
      })
      .passthrough()
      .describe("The data payload describing the content."),
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
  .describe(
    "An ingredient that holds a generic data payload such as textures or backgrounds.",
  );
export type DataIngredient = z.infer<typeof DataIngredient>;
