import { z } from "zod";
export declare const CategoryReference: z.ZodObject<{
    id: z.ZodNumber;
    label: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
export type CategoryReference = z.infer<typeof CategoryReference>;
//# sourceMappingURL=CategoryReference.d.ts.map