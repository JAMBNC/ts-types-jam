import { z } from "zod";
export declare const Category: z.ZodObject<{
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    name: z.ZodString;
}, z.core.$strip>;
export type Category = z.infer<typeof Category>;
//# sourceMappingURL=Category.d.ts.map