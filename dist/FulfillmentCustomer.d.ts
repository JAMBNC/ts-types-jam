import { z } from "zod";
declare const _FulfillmentCustomer: z.ZodObject<{
    id: import("./ExternalId.js").ExternalIdSchema;
    firstName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    lastName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
type _FulfillmentCustomerSchema = typeof _FulfillmentCustomer;
export interface FulfillmentCustomerSchema extends _FulfillmentCustomerSchema {
}
export declare const FulfillmentCustomer: FulfillmentCustomerSchema;
export type FulfillmentCustomer = z.infer<typeof FulfillmentCustomer>;
export {};
//# sourceMappingURL=FulfillmentCustomer.d.ts.map