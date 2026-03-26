import { z } from "zod";
export declare const Category: z.ZodObject<{
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    name: z.ZodString;
}, z.core.$loose>;
export type Category = z.infer<typeof Category>;
//# sourceMappingURL=Category.d.ts.map