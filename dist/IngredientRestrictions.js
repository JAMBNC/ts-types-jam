import { z } from "zod";
import { IngredientRestriction } from "./IngredientRestriction.js";
const _IngredientRestrictions = z.array(IngredientRestriction);
export const IngredientRestrictions = _IngredientRestrictions;
