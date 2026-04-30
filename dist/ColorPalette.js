import { z } from "zod";
export const ColorPalette = z
    .object({
    /**A list of color uuids found within the palette.*/
    colors: z
        .array(z
        .string()
        .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/))
        .describe("A list of color uuids found within the palette."),
    /**The name for the color palette.*/
    name: z.string().describe("The name for the color palette."),
    /**A unique UUID identifier for the color.*/
    uuid: z
        .string()
        .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
        .describe("A unique UUID identifier for the color."),
})
    .passthrough();
