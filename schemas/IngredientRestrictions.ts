import { z } from "zod";
import { IngredientRestriction } from "./IngredientRestriction.js";

const _IngredientRestrictions = z.array(IngredientRestriction);
type _IngredientRestrictionsSchema = typeof _IngredientRestrictions;
export interface IngredientRestrictionsSchema extends _IngredientRestrictionsSchema {}
export const IngredientRestrictions: IngredientRestrictionsSchema =
  _IngredientRestrictions;
export type IngredientRestrictions = z.infer<typeof IngredientRestrictions>;
