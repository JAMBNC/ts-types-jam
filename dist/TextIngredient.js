import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { Rect } from "./Rect.js";
import { RgbColor } from "./RgbColor.js";
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
    /**The text content.*/
    text: z.string().describe("The text content."),
    /**The font family name.*/
    fontFamily: z.string().describe("The font family name."),
    /**A numeric value with a unit of measurement.*/
    fontSize: Dimension,
    /**A color with name, hex code, and optional RGBA components.*/
    fontColor: RgbColor,
    /**The font weight (e.g. normal, bold).*/
    fontWeight: z
        .string()
        .describe("The font weight (e.g. normal, bold).")
        .optional(),
    /**The font style (e.g. normal, italic).*/
    fontStyle: z
        .string()
        .describe("The font style (e.g. normal, italic).")
        .optional(),
    /**Text alignment (e.g. left, center, right).*/
    textAlign: z
        .string()
        .describe("Text alignment (e.g. left, center, right).")
        .optional(),
    /**Line height multiplier.*/
    lineHeight: z.number().describe("Line height multiplier.").optional(),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
})
    .strict()
    .describe("An ingredient that renders text content with font and style properties.");
