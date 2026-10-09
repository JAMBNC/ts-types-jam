import { z } from "zod";

const _IngredientRestrictions = z
  .object({
    /**Pins the ingredient to the top or bottom of the stacking order.*/
    zIndex: z
      .enum(["top", "bottom"])
      .describe(
        "Pins the ingredient to the top or bottom of the stacking order.",
      )
      .optional(),
    /**If true, the ingredient is hidden.*/
    hidden: z
      .boolean()
      .describe("If true, the ingredient is hidden.")
      .optional(),
    /**If true, the ingredient can't be selected.*/
    unselectable: z
      .boolean()
      .describe("If true, the ingredient can't be selected.")
      .optional(),
    /**If true, the ingredient can't be scaled.*/
    unscalable: z
      .boolean()
      .describe("If true, the ingredient can't be scaled.")
      .optional(),
    /**If true, the ingredient can't be moved.*/
    unmovable: z
      .boolean()
      .describe("If true, the ingredient can't be moved.")
      .optional(),
    /**If true, the ingredient can't be rotated.*/
    unrotatable: z
      .boolean()
      .describe("If true, the ingredient can't be rotated.")
      .optional(),
    /**If true, transform widgets are hidden for the ingredient.*/
    hideTransformWidgets: z
      .boolean()
      .describe("If true, transform widgets are hidden for the ingredient.")
      .optional(),
    /**If true, z-index widgets are hidden for the ingredient.*/
    hideZIndexWidgets: z
      .boolean()
      .describe("If true, z-index widgets are hidden for the ingredient.")
      .optional(),
    /**If true, content widgets are hidden for the ingredient.*/
    hideContentWidgets: z
      .boolean()
      .describe("If true, content widgets are hidden for the ingredient.")
      .optional(),
    /**If true, style widgets are hidden for the ingredient.*/
    hideStyleWidgets: z
      .boolean()
      .describe("If true, style widgets are hidden for the ingredient.")
      .optional(),
    /**If true, the ingredient can't be deleted.*/
    undeletable: z
      .boolean()
      .describe("If true, the ingredient can't be deleted.")
      .optional(),
  })
  .strict();
type _IngredientRestrictionsSchema = typeof _IngredientRestrictions;
export interface IngredientRestrictionsSchema extends _IngredientRestrictionsSchema {}
export const IngredientRestrictions: IngredientRestrictionsSchema =
  _IngredientRestrictions;
export type IngredientRestrictions = z.infer<typeof IngredientRestrictions>;
