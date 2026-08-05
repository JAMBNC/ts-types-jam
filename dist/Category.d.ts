import { z } from "zod";
declare const _Category: z.ZodObject<{
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    name: z.ZodString;
}, z.core.$loose>;
type _CategorySchema = typeof _Category;
export interface CategorySchema extends _CategorySchema {
}
export declare const Category: CategorySchema;
export type Category = z.infer<typeof Category>;
export {};
//# sourceMappingURL=Category.d.ts.map