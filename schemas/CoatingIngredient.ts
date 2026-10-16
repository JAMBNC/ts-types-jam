import { z } from "zod";
import { IngredientRestrictions } from "./IngredientRestrictions.js";
import { Rect } from "./Rect.js";
import { Slot } from "./Slot.js";
import { TextureColor } from "./TextureColor.js";
import { TextureImage } from "./TextureImage.js";

const _CoatingIngredient = z
  .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    /**A positioned rectangle defined by x, y, width, and height measurements.*/
    rect: Rect.optional(),
    type: z.literal("coating"),
    editable: z.boolean().optional(),
    restrictions: IngredientRestrictions.optional(),
    /**Arbitrary metadata.*/
    metadata: z
      .record(z.string(), z.any())
      .describe("Arbitrary metadata.")
      .optional(),
    /**Code for this coating. Two coatings with the same code should not be on the same page.*/
    code: z
      .string()
      .describe(
        "Code for this coating. Two coatings with the same code should not be on the same page.",
      ),
    opacity: z.number().optional(),
    /**What content belongs in this frame, so a filler and a transposition can address it. Function, never placement: the view the slot sits on already states front/back/inside, which is what makes `logo` on an envelope and `logo` on a folder the same key.*/
    slot: Slot.optional(),
    texture: z.union([TextureColor, TextureImage]).optional(),
    zIndex: z.number().int().optional(),
  })
  .strict()
  .describe("Ingredient for coatings that cover an entire page.");
type _CoatingIngredientSchema = typeof _CoatingIngredient;
export interface CoatingIngredientSchema extends _CoatingIngredientSchema {}
/**Ingredient for coatings that cover an entire page.*/
export const CoatingIngredient: CoatingIngredientSchema = _CoatingIngredient;
export type CoatingIngredient = z.infer<typeof CoatingIngredient>;
