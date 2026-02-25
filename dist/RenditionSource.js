import { z } from "zod";
/**Metadata about the source file for a rendition.*/
export const RenditionSource = z
    .object({
    /**The colorspace of the source file (e.g. "sRGB").*/
    colorspace: z
        .string()
        .describe('The colorspace of the source file (e.g. "sRGB").'),
    /**The resolution of the source file in dots per inch.*/
    dpi: z
        .number()
        .int()
        .describe("The resolution of the source file in dots per inch."),
    /**The file type of the source (e.g. "PNG", "PDF").*/
    type: z
        .string()
        .describe('The file type of the source (e.g. "PNG", "PDF").'),
    /**The height of the source file in pixels.*/
    height: z
        .number()
        .int()
        .describe("The height of the source file in pixels."),
    /**The width of the source file in pixels.*/
    width: z.number().int().describe("The width of the source file in pixels."),
    /**The file size of the source (e.g. "102887B").*/
    size: z.string().describe('The file size of the source (e.g. "102887B").'),
    /**The URL of the source file.*/
    url: z.string().url().describe("The URL of the source file."),
})
    .strict()
    .describe("Metadata about the source file for a rendition.");
