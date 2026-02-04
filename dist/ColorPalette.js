import { z } from "zod";
export const ColorPalette = z
    .object({
    /**A list of color uuids found within the palette.*/
    colors: z
        .array(z.string().uuid())
        .describe("A list of color uuids found within the palette."),
    /**The name for the color palette.*/
    name: z.string().describe("The name for the color palette."),
    /**A unique UUID identifier for the color.*/
    uuid: z.string().uuid().describe("A unique UUID identifier for the color."),
})
    .passthrough();
