import { z } from "zod";
import { Path } from "./Path.js";
import { Rect } from "./Rect.js";
import { RgbColor } from "./RgbColor.js";
/**An ingredient defined by vector paths with optional fill and stroke.*/
export const ShapeIngredient = z
    .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    type: z.literal("shape"),
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
    isDirty: z.boolean(),
    simulated: z.boolean(),
    isDropshadow: z.boolean(),
    isTextureMask: z.boolean(),
    isValidatorBoundingShape: z.boolean(),
    opacity: z.number().gte(0).lte(1),
    zIndex: z.number().int(),
    hasFill: z.boolean(),
    fillColor: z.union([RgbColor, z.null()]),
    invertFill: z.boolean(),
    hasStroke: z.boolean(),
    strokeColor: z.union([RgbColor, z.null()]),
    strokeWidth: z.number(),
    lineDash: z.union([z.array(z.number()), z.null()]),
    /**Map of path IDs to path definitions.*/
    paths: z
        .record(z.string(), Path)
        .describe("Map of path IDs to path definitions."),
    /**Ordered list of path IDs.*/
    pathsOrdered: z.array(z.string()).describe("Ordered list of path IDs."),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect,
})
    .strict()
    .describe("An ingredient defined by vector paths with optional fill and stroke.");
