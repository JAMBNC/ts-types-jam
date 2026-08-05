import { z } from "zod";
declare const _Taxonomy: z.ZodObject<{
    master: z.ZodOptional<z.ZodString>;
    primary: z.ZodOptional<z.ZodString>;
    sub: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _TaxonomySchema = typeof _Taxonomy;
export interface TaxonomySchema extends _TaxonomySchema {
}
export declare const Taxonomy: TaxonomySchema;
export type Taxonomy = z.infer<typeof Taxonomy>;
export {};
//# sourceMappingURL=Taxonomy.d.ts.map