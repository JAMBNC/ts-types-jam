import { z } from "zod";

/**A discriminated union of all supported ingredient types.*/
export const Ingredient = z
  .discriminatedUnion("type", [
    z
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
      ),
    z
      .object({
        /**Unique identifier for this ingredient.*/
        id: z.string().describe("Unique identifier for this ingredient."),
        type: z.literal("fill"),
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
        color: z
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
        "An ingredient that fills a rectangular area with a solid color.",
      ),
    z
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
      ),
    z
      .object({
        /**Unique identifier for this ingredient.*/
        id: z.string().describe("Unique identifier for this ingredient."),
        type: z.literal("rectangle"),
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
        /**A numeric value with a unit of measurement.*/
        strokeCornerRadius: z
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
        "A rectangular ingredient with optional fill, stroke, and corner radius.",
      ),
    z
      .object({
        /**Unique identifier for this ingredient.*/
        id: z.string().describe("Unique identifier for this ingredient."),
        type: z.literal("text"),
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
        /**The text content.*/
        text: z.string().describe("The text content."),
        /**The font family name.*/
        fontFamily: z.string().describe("The font family name."),
        /**A numeric value with a unit of measurement.*/
        fontSize: z
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
        fontColor: z
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
        /**The font weight (e.g. normal, bold).*/
        fontWeight: z
          .string()
          .describe("The font weight (e.g. normal, bold).")
          .optional(),
        /**The font style (e.g. normal, italic).*/
        fontStyle: z
          .string()
          .describe("The font style (e.g. normal, italic).")
          .optional(),
        /**Text alignment (e.g. left, center, right).*/
        textAlign: z
          .string()
          .describe("Text alignment (e.g. left, center, right).")
          .optional(),
        /**Line height multiplier.*/
        lineHeight: z.number().describe("Line height multiplier.").optional(),
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
        "An ingredient that renders text content with font and style properties.",
      ),
    z
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
      .describe("An ingredient that renders a raster image."),
  ])
  .describe("A discriminated union of all supported ingredient types.");
export type Ingredient = z.infer<typeof Ingredient>;
