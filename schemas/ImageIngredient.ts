import { z } from "zod";
import { Rect } from "./Rect.js";
import { ViewLayer } from "./ViewLayer.js";

/**An ingredient that renders a raster image.*/
export const ImageIngredient = z
  .object({
    type: z.literal("image"),
    dropshadow: z.boolean().optional(),
    editable: z.boolean().optional(),
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    /**Arbitrary metadata.*/
    metadata: z
      .record(z.string(), z.any())
      .describe("Arbitrary metadata.")
      .optional(),
    /**The natural height of the image in pixels.*/
    naturalHeight: z
      .number()
      .describe("The natural height of the image in pixels.")
      .optional(),
    /**The natural width of the image in pixels.*/
    naturalWidth: z
      .number()
      .describe("The natural width of the image in pixels.")
      .optional(),
    opacity: z.number().gte(0).lte(1),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    imageRect: Rect.optional(),
    /**Legacy Pixel Data for the chili save*/
    legacyPixelData: z
      .object({
        realWidthPixels: z.number().optional(),
        realHeightPixels: z.number().optional(),
        imgWidthPixels: z.number().optional(),
        imgHeightPixels: z.number().optional(),
      })
      .strict()
      .describe("Legacy Pixel Data for the chili save")
      .optional(),
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees."),
    /**The image source path or URL.*/
    src: z.string().describe("The image source path or URL."),
    textureMask: z.boolean().optional(),
    validatorBoundingShape: z.boolean().optional(),
    viewLayer: ViewLayer.optional(),
    zIndex: z.number().int(),
  })
  .strict()
  .describe("An ingredient that renders a raster image.");
export type ImageIngredient = z.infer<typeof ImageIngredient>;
