import { z } from "zod";
import { Dimension } from "./Dimension.js";

/**An ingredient that holds a generic data payload such as textures or backgrounds.*/
export const DataIngredient = z
  .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    type: z.literal("data"),
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
    isDirty: z.boolean(),
    simulated: z.boolean(),
    isDropshadow: z.boolean(),
    isTextureMask: z.boolean(),
    isValidatorBoundingShape: z.boolean(),
    opacity: z.number().gte(0).lte(1),
    zIndex: z.number().int(),
    /**The data payload describing the content.*/
    data: z
      .object({
        /**A numeric value with a unit of measurement.*/
        width: Dimension,
        /**A numeric value with a unit of measurement.*/
        height: Dimension,
        /**A numeric value with a unit of measurement.*/
        x: Dimension,
        /**A numeric value with a unit of measurement.*/
        y: Dimension,
        type: z.string(),
        viewLayer: z.string(),
        layerName: z.string(),
        isTextureMask: z.boolean(),
        tag: z.string(),
        path: z.string(),
      })
      .strict()
      .describe("The data payload describing the content."),
  })
  .strict()
  .describe(
    "An ingredient that holds a generic data payload such as textures or backgrounds.",
  );
export type DataIngredient = z.infer<typeof DataIngredient>;
