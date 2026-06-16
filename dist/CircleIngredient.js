import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { Rect } from "./Rect.js";
import { RgbColor } from "./RgbColor.js";
import { ViewLayer } from "./ViewLayer.js";
/**A circle ingredient with fill and stroke.*/
export const CircleIngredient = z
    .object({
    type: z.literal("circle"),
    dropshadow: z.boolean().optional(),
    editable: z.boolean().optional(),
    /**A color with name, hex code, and optional RGBA components.*/
    fillColor: RgbColor.optional(),
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    invertFill: z.boolean().optional(),
    lineDash: z.array(z.number()).optional(),
    /**Arbitrary metadata.*/
    metadata: z
        .record(z.string(), z.any())
        .describe("Arbitrary metadata.")
        .optional(),
    opacity: z.number().gte(0).lte(1),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
    radius: z.object({ x: Dimension, y: Dimension }).strict(),
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees."),
    /**A color with name, hex code, and optional RGBA components.*/
    strokeColor: RgbColor.optional(),
    strokeWidth: Dimension.optional(),
    textureMask: z.boolean().optional(),
    validatorBoundingShape: z.boolean().optional(),
    viewLayer: ViewLayer.optional(),
    zIndex: z.number().int(),
})
    .strict()
    .describe("A circle ingredient with fill and stroke.");
