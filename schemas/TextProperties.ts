import { z } from "zod";
import { Alignment } from "./Alignment.js";
import { Dimension } from "./Dimension.js";
import { Font } from "./Font.js";

/**Properties for displayed text*/
export const TextProperties = z
  .object({
    alignment: Alignment,
    /**Body text broken up into lines. Can contain variables surrounded with %%*/
    body: z
      .array(z.string())
      .describe(
        "Body text broken up into lines. Can contain variables surrounded with %%",
      ),
    /**Record of variable replacement strings*/
    dataSource: z
      .record(z.string(), z.string())
      .describe("Record of variable replacement strings")
      .optional(),
    /**Schema for a single font used throughout the system.*/
    fontData: Font,
    /**Font size in pt*/
    fontSize: z.string().describe("Font size in pt"),
    /**Leading value as a percentage*/
    leading: z.number().describe("Leading value as a percentage").optional(),
    /**DataSource to use for measurements and validation regardless of the current display*/
    measurementDataSource: z
      .record(z.string(), z.string())
      .describe(
        "DataSource to use for measurements and validation regardless of the current display",
      )
      .optional(),
    /**Is this text Placeholder text?*/
    placeholder: z
      .boolean()
      .describe("Is this text Placeholder text?")
      .optional(),
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees.").optional(),
    /**Is strikethrough applied?*/
    strikethrough: z.boolean().describe("Is strikethrough applied?"),
    /**Data for the text lines as they are rendered on the document.*/
    textLines: z
      .array(
        z
          .object({
            height: Dimension,
            /**Sub details about the specific line and its glyphs*/
            span: z
              .object({
                /**Semicolon separated list of character positions*/
                charPositions: z
                  .string()
                  .describe("Semicolon separated list of character positions"),
                fontSize: Dimension,
                /**Semicolon separated list of glyph ids*/
                glyphIds: z
                  .string()
                  .describe("Semicolon separated list of glyph ids"),
                /**Deprecated capitalization for glyphIds. Exported only to support mage systems.*/
                glyphIDs: z
                  .string()
                  .describe(
                    "Deprecated capitalization for glyphIds. Exported only to support mage systems.",
                  )
                  .optional(),
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
                height: Dimension,
                /**Plaintext string of the line text*/
                text: z.string().describe("Plaintext string of the line text"),
                width: Dimension,
                x: Dimension,
                y: Dimension,
              })
              .passthrough()
              .describe("Sub details about the specific line and its glyphs"),
            width: Dimension,
            x: Dimension,
            y: Dimension,
          })
          .passthrough()
          .describe("A single line of text"),
      )
      .describe("Data for the text lines as they are rendered on the document.")
      .optional(),
    /**Is underline applied?*/
    underline: z.boolean().describe("Is underline applied?"),
  })
  .passthrough()
  .describe("Properties for displayed text");
export type TextProperties = z.infer<typeof TextProperties>;
