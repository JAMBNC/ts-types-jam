import { z } from "zod";
import { Dimension } from "./Dimension.js";
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
        /**A numeric value with a unit of measurement.*/
        x: Dimension,
        /**A numeric value with a unit of measurement.*/
        y: Dimension,
        /**A numeric value with a unit of measurement.*/
        width: Dimension,
        /**A numeric value with a unit of measurement.*/
        height: Dimension,
        /**Sub details about the specific line and its glyphs*/
        span: z
            .object({
            /**Semicolon separated list of character positions*/
            charPositions: z
                .string()
                .describe("Semicolon separated list of character positions"),
            /**A numeric value with a unit of measurement.*/
            fontSize: Dimension,
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
            /**A numeric value with a unit of measurement.*/
            x: Dimension,
            /**A numeric value with a unit of measurement.*/
            y: Dimension,
            /**A numeric value with a unit of measurement.*/
            width: Dimension,
            /**A numeric value with a unit of measurement.*/
            height: Dimension,
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
