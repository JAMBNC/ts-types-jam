import { z } from "zod";
export declare const DisplayGroup: z.ZodObject<{
    id: z.ZodString;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    pivots: z.ZodArray<z.ZodAny>;
    skus: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type DisplayGroup = z.infer<typeof DisplayGroup>;
//# sourceMappingURL=DisplayGroup.d.ts.map