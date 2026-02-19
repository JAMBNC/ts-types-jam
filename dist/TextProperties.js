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
    /**Data for the text lines as they are rendered on the document.*/
    textLines: z
        .array(z
        .object({
        /**Origin x cord for the line*/
        x: z.number().describe("Origin x cord for the line"),
        /**Origin y cord for the line*/
        y: z.number().describe("Origin y cord for the line"),
        /**Width of the entire line in pt*/
        width: z.number().describe("Width of the entire line in pt"),
        /**Height of the entire line in pt*/
        height: z.number().describe("Height of the entire line in pt"),
        /**Sub details about the specific line and its glyphs*/
        span: z
            .object({
            /**Semicolon separated list of character positions*/
            charPositions: z
                .string()
                .describe("Semicolon separated list of character positions"),
            /**Line font size in pt*/
            fontSize: z.number().describe("Line font size in pt"),
            /**Semicolon separated list of glyph ids*/
            glyphIds: z
                .string()
                .describe("Semicolon separated list of glyph ids"),
            /**Semicolon separated list of glyph positions.*/
            glyphPositions: z
                .string()
                .describe("Semicolon separated list of glyph positions."),
            /**Semicolon separated list of glyph x offsets*/
            glyphXOffsets: z
                .string()
                .describe("Semicolon separated list of glyph x offsets"),
            /**Semicolon separated list of glyph y offsets*/
            glyphYOffsets: z
                .string()
                .describe("Semicolon separated list of glyph y offsets"),
            /**Plaintext string of the line text*/
            text: z.string().describe("Plaintext string of the line text"),
            /**Origin X offset for the line in pt.*/
            x: z.number().describe("Origin X offset for the line in pt."),
            /**Origin y offset for the line in pt.*/
            y: z.number().describe("Origin y offset for the line in pt."),
            /**Width of the text in pt.*/
            width: z.number().describe("Width of the text in pt."),
            /**Height of the font's typo ascender in pt.*/
            height: z
                .number()
                .describe("Height of the font's typo ascender in pt."),
        })
            .passthrough()
            .describe("Sub details about the specific line and its glyphs"),
    })
        .passthrough())
        .describe("Data for the text lines as they are rendered on the document.")
        .optional(),
})
    .passthrough()
    .describe("Properties for displayed text");
