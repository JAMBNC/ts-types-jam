import { z } from "zod";
declare const _IngredientRestrictions: z.ZodObject<{
    zIndex: z.ZodOptional<z.ZodEnum<{
        bottom: "bottom";
        top: "top";
    }>>;
    unselectable: z.ZodOptional<z.ZodBoolean>;
    unscalable: z.ZodOptional<z.ZodBoolean>;
    unmovable: z.ZodOptional<z.ZodBoolean>;
    unrotatable: z.ZodOptional<z.ZodBoolean>;
    hideTransformWidgets: z.ZodOptional<z.ZodBoolean>;
    hideZIndexWidgets: z.ZodOptional<z.ZodBoolean>;
    hideContentWidgets: z.ZodOptional<z.ZodBoolean>;
    hideStyleWidgets: z.ZodOptional<z.ZodBoolean>;
    undeletable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
type _IngredientRestrictionsSchema = typeof _IngredientRestrictions;
export interface IngredientRestrictionsSchema extends _IngredientRestrictionsSchema {
}
export declare const IngredientRestrictions: IngredientRestrictionsSchema;
export type IngredientRestrictions = z.infer<typeof IngredientRestrictions>;
export {};
//# sourceMappingURL=IngredientRestrictions.d.ts.map