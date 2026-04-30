import { z } from "zod";
import { FontStyle } from "./FontStyle.js";
/**The schema required for a single font used throughout the system.*/
export const Font = z
    .object({
    /**A unique UUID identifier for the font. Used to retrieve the font.*/
    uuid: z
        .string()
        .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
        .describe("A unique UUID identifier for the font. Used to retrieve the font."),
    /**The style of the font.*/
    style: FontStyle,
    /**The name of the font. Can also inferred from the family + style*/
    name: z
        .string()
        .describe("The name of the font. Can also inferred from the family + style")
        .optional(),
})
    .strict()
    .describe("The schema required for a single font used throughout the system.");
