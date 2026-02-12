import { z } from "zod";
import { Font } from "./Font.js";
import { Rect } from "./Rect.js";
/**An ingredient that renders text content with font and style properties.*/
export const TextIngredient = z
    .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    type: z.literal("text"),
    /**Arbitrary metadata.*/
    metadata: z.record(z.string(), z.any()).describe("Arbitrary metadata."),
    isNew: z.boolean(),
    /**The view layer this ingredient belongs to.*/
    viewLayer: z
        .union([
        z.string().describe("The view layer this ingredient belongs to."),
        z.null().describe("The view layer this ingredient belongs to."),
    ])
        .describe("The view layer this ingredient belongs to."),
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees."),
    editable: z.boolean().optional(),
    isDirty: z.boolean(),
    simulated: z.boolean(),
    isDropshadow: z.boolean(),
    isTextureMask: z.boolean(),
    isValidatorBoundingShape: z.boolean(),
    opacity: z.number().gte(0).lte(1),
    zIndex: z.number().int(),
    /**The text related data.*/
    text: z
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
        leading: z
            .number()
            .describe("Leading value as a percentage")
            .optional(),
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
        .describe("The text related data."),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
})
    .strict()
    .describe("An ingredient that renders text content with font and style properties.");
