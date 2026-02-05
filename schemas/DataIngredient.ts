import { z } from "zod";

/**An ingredient that holds a generic data payload such as textures or backgrounds.*/
export const DataIngredient = z
  .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    type: z.literal("data"),
    /**Arbitrary metadata.*/
    metadata: z.record(z.any()).describe("Arbitrary metadata."),
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
        width: z
          .object({
            /**The numeric value.*/
            v: z.number().describe("The numeric value."),
            /**The unit of measurement for dimensions.*/
            u: z
              .enum(["mm", "in", "px", "pt"])
              .describe("The unit of measurement for dimensions."),
          })
          .strict()
          .describe("A numeric value with a unit of measurement."),
        /**A numeric value with a unit of measurement.*/
        height: z
          .object({
            /**The numeric value.*/
            v: z.number().describe("The numeric value."),
            /**The unit of measurement for dimensions.*/
            u: z
              .enum(["mm", "in", "px", "pt"])
              .describe("The unit of measurement for dimensions."),
          })
          .strict()
          .describe("A numeric value with a unit of measurement."),
        /**A numeric value with a unit of measurement.*/
        x: z
          .object({
            /**The numeric value.*/
            v: z.number().describe("The numeric value."),
            /**The unit of measurement for dimensions.*/
            u: z
              .enum(["mm", "in", "px", "pt"])
              .describe("The unit of measurement for dimensions."),
          })
          .strict()
          .describe("A numeric value with a unit of measurement."),
        /**A numeric value with a unit of measurement.*/
        y: z
          .object({
            /**The numeric value.*/
            v: z.number().describe("The numeric value."),
            /**The unit of measurement for dimensions.*/
            u: z
              .enum(["mm", "in", "px", "pt"])
              .describe("The unit of measurement for dimensions."),
          })
          .strict()
          .describe("A numeric value with a unit of measurement."),
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
