import { z } from "zod";
declare const _IngredientRestrictions: z.ZodObject<{
    zIndex: z.ZodOptional<z.ZodEnum<{
        bottom: "bottom";
        top: "top";
    }>>;
    select: z.ZodOptional<z.ZodBoolean>;
    scale: z.ZodOptional<z.ZodBoolean>;
    translate: z.ZodOptional<z.ZodBoolean>;
    rotate: z.ZodOptional<z.ZodBoolean>;
    transformWidgets: z.ZodOptional<z.ZodBoolean>;
    zIndexWidgets: z.ZodOptional<z.ZodBoolean>;
    contentWidgets: z.ZodOptional<z.ZodBoolean>;
    styleWidgets: z.ZodOptional<z.ZodBoolean>;
    delete: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
type _IngredientRestrictionsSchema = typeof _IngredientRestrictions;
export interface IngredientRestrictionsSchema extends _IngredientRestrictionsSchema {
}
export declare const IngredientRestrictions: IngredientRestrictionsSchema;
export type IngredientRestrictions = z.infer<typeof IngredientRestrictions>;
export {};
//# sourceMappingURL=IngredientRestrictions.d.ts.map