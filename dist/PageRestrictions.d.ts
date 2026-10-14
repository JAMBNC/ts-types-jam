import { z } from "zod";
declare const _PageRestrictions: z.ZodObject<{
    denyNewIngredients: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
type _PageRestrictionsSchema = typeof _PageRestrictions;
export interface PageRestrictionsSchema extends _PageRestrictionsSchema {
}
export declare const PageRestrictions: PageRestrictionsSchema;
export type PageRestrictions = z.infer<typeof PageRestrictions>;
export {};
//# sourceMappingURL=PageRestrictions.d.ts.map