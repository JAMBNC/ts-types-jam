import { z } from "zod";
declare const _IngredientRestriction: z.ZodUnion<readonly [import("./ZIndexRestriction.js").ZIndexRestrictionSchema, import("./SelectRestriction.js").SelectRestrictionSchema, import("./ScaleRestriction.js").ScaleRestrictionSchema, import("./TranslateRestriction.js").TranslateRestrictionSchema, import("./RotateRestriction.js").RotateRestrictionSchema, import("./TransformWidgetsRestriction.js").TransformWidgetsRestrictionSchema, import("./ZIndexWidgetsRestriction.js").ZIndexWidgetsRestrictionSchema, import("./ContentWidgetsRestriction.js").ContentWidgetsRestrictionSchema, import("./StyleWidgetsRestriction.js").StyleWidgetsRestrictionSchema, import("./DeleteRestriction.js").DeleteRestrictionSchema]>;
type _IngredientRestrictionSchema = typeof _IngredientRestriction;
export interface IngredientRestrictionSchema extends _IngredientRestrictionSchema {
}
export declare const IngredientRestriction: IngredientRestrictionSchema;
export type IngredientRestriction = z.infer<typeof IngredientRestriction>;
export {};
//# sourceMappingURL=IngredientRestriction.d.ts.map