import { z } from "zod";
export declare const Customer: z.ZodObject<{
    addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        city: z.ZodString;
        company: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        firstName: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        lastName: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        postal: z.ZodOptional<z.ZodString>;
        region: z.ZodOptional<z.ZodString>;
        streets: z.ZodArray<z.ZodString>;
    }, z.core.$loose>>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    lastName: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type Customer = z.infer<typeof Customer>;
//# sourceMappingURL=Customer.d.ts.map