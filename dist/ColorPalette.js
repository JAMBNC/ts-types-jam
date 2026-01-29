import { z } from "zod";
/**A defined set of colors with a given name.*/
export const ColorPalette = z
    .object({
    /**A unique UUID identifier for the palette.*/
    uuid: z
        .string()
        .uuid()
        .describe("A unique UUID identifier for the palette."),
    /**The name for the color palette.*/
    name: z.string().describe("The name for the color palette."),
    /**A list of color uuids found within the palette.*/
    colors: z
        .array(z.string().uuid())
        .describe("A list of color uuids found within the palette."),
})
    .strict()
    .describe("A defined set of colors with a given name.");
