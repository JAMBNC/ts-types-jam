import { z } from "zod";
declare const _Customer: z.ZodObject<{
    addresses: z.ZodOptional<z.ZodArray<import("./Address.js").AddressSchema>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    lastName: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _CustomerSchema = typeof _Customer;
export interface CustomerSchema extends _CustomerSchema {
}
export declare const Customer: CustomerSchema;
export type Customer = z.infer<typeof Customer>;
export {};
//# sourceMappingURL=Customer.d.ts.map