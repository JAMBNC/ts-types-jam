import { z } from "zod";
export declare const Discount: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    code: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$loose>;
export type Discount = z.infer<typeof Discount>;
//# sourceMappingURL=Discount.d.ts.map