import { z } from "zod";
export declare const Address: z.ZodObject<{
    city: z.ZodString;
    company: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    lastName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    postal: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    streets: z.ZodArray<z.ZodString>;
}, z.core.$loose>;
export type Address = z.infer<typeof Address>;
//# sourceMappingURL=Address.d.ts.map