import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Rect } from "./Rect.js";
const _ImageIngredient = BaseIngredient.merge(z
    .object({
    type: z.literal("image"),
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
    /**The image source path or URL.*/
    src: z.string().describe("The image source path or URL."),
})
    .passthrough()).describe("An ingredient that renders a raster image.");
/**An ingredient that renders a raster image.*/
export const ImageIngredient = _ImageIngredient;
