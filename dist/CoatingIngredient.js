import { z } from "zod";
import { Rect } from "./Rect.js";
import { TextureColor } from "./TextureColor.js";
import { TextureImage } from "./TextureImage.js";
/**Ingredient for coatings that cover an entire page.*/
export const CoatingIngredient = z
    .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect.optional(),
    type: z.literal("coating"),
    editable: z.boolean().optional(),
    /**Arbitrary metadata.*/
    metadata: z
        .record(z.string(), z.any())
        .describe("Arbitrary metadata.")
        .optional(),
    /**Code for this coating. Two coatings with the same code should not be on the same page.*/
    code: z
        .string()
        .describe("Code for this coating. Two coatings with the same code should not be on the same page."),
    opacity: z.number().optional(),
    texture: z.union([TextureColor, TextureImage]),
    zIndex: z.number().int().optional(),
})
    .strict()
    .describe("Ingredient for coatings that cover an entire page.");
