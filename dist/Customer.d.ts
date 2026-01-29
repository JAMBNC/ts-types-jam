import { z } from "zod";
export declare const Customer: z.ZodObject<{
    addresses: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    lastName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Customer = z.infer<typeof Customer>;
//# sourceMappingURL=Customer.d.ts.map