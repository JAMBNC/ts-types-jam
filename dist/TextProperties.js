import { z } from "zod";
import { Font } from "./Font.js";
/**Properties for displayed text*/
export const TextProperties = z
    .object({
    /**Text alignment (e.g. left, center, right).*/
    alignment: z
        .string()
        .describe("Text alignment (e.g. left, center, right)."),
    /**Body text broken up into lines. Can contain variables surrounded with %%*/
    body: z
        .array(z.string())
        .describe("Body text broken up into lines. Can contain variables surrounded with %%"),
    /**Record of variable replacement strings*/
    dataSource: z
        .record(z.string(), z.string())
        .describe("Record of variable replacement strings")
        .optional(),
    /**DataSource to use for measurements and validation regardless of the current display*/
    measurementDataSource: z
        .record(z.string(), z.string())
        .describe("DataSource to use for measurements and validation regardless of the current display")
        .optional(),
    /**Font size in pt*/
    fontSize: z.string().describe("Font size in pt"),
    /**Leading value as a percentage*/
    leading: z.number().describe("Leading value as a percentage").optional(),
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees.").optional(),
    /**Is strikethrough applied?*/
    strikethrough: z.boolean().describe("Is strikethrough applied?"),
    /**Is underline applied?*/
    underline: z.boolean().describe("Is underline applied?"),
    /**The schema required for a single font used throughout the system.*/
    fontData: Font,
})
    .passthrough()
    .describe("Properties for displayed text");
