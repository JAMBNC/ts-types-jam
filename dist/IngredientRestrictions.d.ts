import { z } from "zod";
declare const _IngredientRestrictions: z.ZodArray<import("./IngredientRestriction.js").IngredientRestrictionSchema>;
type _IngredientRestrictionsSchema = typeof _IngredientRestrictions;
export interface IngredientRestrictionsSchema extends _IngredientRestrictionsSchema {
}
export declare const IngredientRestrictions: IngredientRestrictionsSchema;
export type IngredientRestrictions = z.infer<typeof IngredientRestrictions>;
export {};
//# sourceMappingURL=IngredientRestrictions.d.ts.map