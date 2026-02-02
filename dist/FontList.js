import { z } from "zod";
/**A collection of font families available in the system.*/
export const FontList = z
    .array(z
    .object({
    /**The name of the font family.*/
    familyName: z.string().describe("The name of the font family."),
    /**An array of font entries that belong to this family.*/
    fonts: z
        .array(z
        .object({
        /**A unique UUID identifier for the font. Used to retrieve the font.*/
        uuid: z
            .string()
            .uuid()
            .describe("A unique UUID identifier for the font. Used to retrieve the font."),
        /**The style of the font.*/
        style: z
            .enum([
            "regular",
            "italic",
            "bold",
            "bold_italic",
            "light",
            "light_italic",
        ])
            .describe("The style of the font."),
        /**The name of the font. Can also inferred from the family + style*/
        name: z
            .string()
            .describe("The name of the font. Can also inferred from the family + style")
            .optional(),
    })
        .strict()
        .describe("The schema required for a single font used throughout the system."))
        .min(1)
        .describe("An array of font entries that belong to this family."),
})
    .strict()
    .describe("A collection of fonts that make up a font family."))
    .describe("A collection of font families available in the system.");
