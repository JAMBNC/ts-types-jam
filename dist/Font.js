import { z } from "zod";
/**Schema for a single font used throughout the system.*/
export const Font = z
    .object({
    /**The format of font file.*/
    format: z
        .enum(["otf", "ttf"])
        .describe("The format of font file.")
        .optional(),
    /**The family of the font.*/
    family: z.string().describe("The family of the font."),
    /**The name of the font. Can also inferred from the family + style*/
    name: z
        .string()
        .describe("The name of the font. Can also inferred from the family + style")
        .optional(),
    /**URL of preview image displaying the font name written in the font.*/
    previewImageUrl: z
        .string()
        .describe("URL of preview image displaying the font name written in the font.")
        .optional(),
    priority: z.number().int().optional(),
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
    /**Font file url*/
    url: z.string().describe("Font file url").optional(),
    /**A unique UUID identifier for the font. Used to retrieve the font.*/
    uuid: z
        .string()
        .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
        .describe("A unique UUID identifier for the font. Used to retrieve the font."),
    /**Legacy property for supporting legacy save systems. Matches uuid*/
    id: z
        .string()
        .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
        .describe("Legacy property for supporting legacy save systems. Matches uuid")
        .optional(),
})
    .strict()
    .describe("Schema for a single font used throughout the system.");
