import { z } from "zod";
import { ClipStep } from "./ClipStep.js";
import { IngredientRestrictions } from "./IngredientRestrictions.js";
import { Slot } from "./Slot.js";
import { ViewLayer } from "./ViewLayer.js";

const _BaseIngredient = z
  .object({
    /**Unique identifier for this ingredient.*/
    id: z.string().describe("Unique identifier for this ingredient."),
    /**Arbitrary metadata.*/
    metadata: z
      .record(z.string(), z.any())
      .describe("Arbitrary metadata.")
      .optional(),
    /**What content belongs in this frame, so a filler and a transposition can address it. Function, never placement: the view the slot sits on already states front/back/inside, which is what makes `logo` on an envelope and `logo` on a folder the same key.*/
    slot: Slot.optional(),
    viewLayer: ViewLayer.optional(),
    /**Rotation angle in degrees.*/
    rotation: z.number().describe("Rotation angle in degrees."),
    editable: z.boolean().optional(),
    restrictions: IngredientRestrictions.optional(),
    dropshadow: z.boolean().optional(),
    textureMask: z.boolean().optional(),
    validatorBoundingShape: z.boolean().optional(),
    opacity: z.number().gte(0).lte(1),
    zIndex: z.number().int(),
    /**Placed by a simulation step rather than by a person; filterSimulated removes these.*/
    simulated: z
      .boolean()
      .describe(
        "Placed by a simulation step rather than by a person; filterSimulated removes these.",
      )
      .optional(),
    /**Clip steps that narrow where this ingredient draws, applied in order.*/
    clip: z
      .array(ClipStep)
      .describe(
        "Clip steps that narrow where this ingredient draws, applied in order.",
      )
      .optional(),
  })
  .passthrough()
  .describe(
    "Fields shared by every drawable ingredient type, composed into each via allOf. A base (template) design also uses these; a coating is the one ingredient that does not, and stays standalone.",
  );
type _BaseIngredientSchema = typeof _BaseIngredient;
export interface BaseIngredientSchema extends _BaseIngredientSchema {}
/**Fields shared by every drawable ingredient type, composed into each via allOf. A base (template) design also uses these; a coating is the one ingredient that does not, and stays standalone.*/
export const BaseIngredient: BaseIngredientSchema = _BaseIngredient;
export type BaseIngredient = z.infer<typeof BaseIngredient>;
