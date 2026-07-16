import { z } from "zod";
export declare const FulfillmentCustomer: z.ZodObject<{
    id: z.ZodString;
    firstName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    lastName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type FulfillmentCustomer = z.infer<typeof FulfillmentCustomer>;
//# sourceMappingURL=FulfillmentCustomer.d.ts.map