import { z } from "zod";
declare const _CategoryReference: z.ZodObject<{
    id: z.ZodNumber;
    label: z.ZodString;
    url: z.ZodString;
}, z.core.$loose>;
type _CategoryReferenceSchema = typeof _CategoryReference;
export interface CategoryReferenceSchema extends _CategoryReferenceSchema {
}
export declare const CategoryReference: CategoryReferenceSchema;
export type CategoryReference = z.infer<typeof CategoryReference>;
export {};
//# sourceMappingURL=CategoryReference.d.ts.map