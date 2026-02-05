import { z } from "zod";

/**An ingredient defined by vector paths with optional fill and stroke.*/
export const ShapeIngredient = z
  .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    type: z.literal("shape"),
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
    hasFill: z.boolean(),
    fillColor: z.union([
      z
        .object({
          /**The normalized name for a color, used for spot name in spot applications.*/
          name: z
            .string()
            .describe(
              "The normalized name for a color, used for spot name in spot applications.",
            ),
          /**Color representations keyed by color space name.*/
          representations: z
            .object({
              sRGB: z
                .array(z.number())
                .min(3)
                .max(4)
                .describe(
                  "The numeric value of a color, dependent on the color model/color space.",
                ),
              US_Web_Coated_SWOP_v2: z
                .array(z.number())
                .min(3)
                .max(4)
                .describe(
                  "The numeric value of a color, dependent on the color model/color space.",
                ),
            })
            .partial()
            .describe("Color representations keyed by color space name."),
          /**A unique UUID identifier for the color.*/
          uuid: z
            .string()
            .uuid()
            .describe("A unique UUID identifier for the color."),
        })
        .passthrough(),
      z.null(),
    ]),
    invertFill: z.boolean(),
    hasStroke: z.boolean(),
    strokeColor: z.union([
      z
        .object({
          /**The normalized name for a color, used for spot name in spot applications.*/
          name: z
            .string()
            .describe(
              "The normalized name for a color, used for spot name in spot applications.",
            ),
          /**Color representations keyed by color space name.*/
          representations: z
            .object({
              sRGB: z
                .array(z.number())
                .min(3)
                .max(4)
                .describe(
                  "The numeric value of a color, dependent on the color model/color space.",
                ),
              US_Web_Coated_SWOP_v2: z
                .array(z.number())
                .min(3)
                .max(4)
                .describe(
                  "The numeric value of a color, dependent on the color model/color space.",
                ),
            })
            .partial()
            .describe("Color representations keyed by color space name."),
          /**A unique UUID identifier for the color.*/
          uuid: z
            .string()
            .uuid()
            .describe("A unique UUID identifier for the color."),
        })
        .passthrough(),
      z.null(),
    ]),
    strokeWidth: z.number(),
    lineDash: z.union([z.array(z.number()), z.null()]),
    /**Map of path IDs to path definitions.*/
    paths: z
      .record(
        z
          .object({
            /**Whether the path is closed.*/
            isClosed: z.string().describe("Whether the path is closed."),
            /**Map of point IDs to point definitions.*/
            points: z
              .record(
                z
                  .discriminatedUnion("type", [
                    z
                      .object({
                        type: z.literal("bezier"),
                        /**A numeric value with a unit of measurement.*/
                        ix: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        iy: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        ox: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        oy: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        x: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        y: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                      })
                      .strict()
                      .describe(
                        "A bezier curve control point with in-handle, out-handle, and anchor position.",
                      ),
                    z
                      .object({
                        type: z.literal("line"),
                        /**A numeric value with a unit of measurement.*/
                        ix: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        iy: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        ox: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        oy: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        x: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                        /**A numeric value with a unit of measurement.*/
                        y: z
                          .object({
                            /**The numeric value.*/
                            v: z.number().describe("The numeric value."),
                            /**The unit of measurement for dimensions.*/
                            u: z
                              .enum(["mm", "in", "px", "pt"])
                              .describe(
                                "The unit of measurement for dimensions.",
                              ),
                          })
                          .strict()
                          .describe(
                            "A numeric value with a unit of measurement.",
                          ),
                      })
                      .strict()
                      .describe(
                        "A straight line control point with in-handle, out-handle, and anchor position.",
                      ),
                  ])
                  .describe("A discriminated union of path point types."),
              )
              .describe("Map of point IDs to point definitions."),
            /**Ordered list of point IDs defining the path sequence.*/
            pointsOrdered: z
              .array(z.string())
              .describe(
                "Ordered list of point IDs defining the path sequence.",
              ),
          })
          .strict()
          .describe("A vector path consisting of ordered control points."),
      )
      .describe("Map of path IDs to path definitions."),
    /**Ordered list of path IDs.*/
    pathsOrdered: z.array(z.string()).describe("Ordered list of path IDs."),
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
  .describe(
    "An ingredient defined by vector paths with optional fill and stroke.",
  );
export type ShapeIngredient = z.infer<typeof ShapeIngredient>;
