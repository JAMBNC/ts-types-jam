import { z } from "zod";

/**An ingredient that renders a raster image.*/
export const ImageIngredient = z
  .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    type: z.literal("image"),
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
    /**The image source path or URL.*/
    src: z.string().describe("The image source path or URL."),
    /**The natural width of the image in pixels.*/
    naturalWidth: z
      .number()
      .describe("The natural width of the image in pixels.")
      .optional(),
    /**The natural height of the image in pixels.*/
    naturalHeight: z
      .number()
      .describe("The natural height of the image in pixels.")
      .optional(),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: z
      .object({
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
      })
      .strict()
      .describe(
        "A positioned rectangle defined by x, y, width, and height measurements.",
      ),
  })
  .strict()
  .describe("An ingredient that renders a raster image.");
export type ImageIngredient = z.infer<typeof ImageIngredient>;
