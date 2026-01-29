import { z } from "zod";
export declare const Taxonomy: z.ZodObject<{
    master: z.ZodOptional<z.ZodString>;
    primary: z.ZodOptional<z.ZodString>;
    sub: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Taxonomy = z.infer<typeof Taxonomy>;
//# sourceMappingURL=Taxonomy.d.ts.map