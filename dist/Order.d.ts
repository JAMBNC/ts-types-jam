import { z } from "zod";
export declare const Order: z.ZodObject<{
    billingAddress: z.ZodAny;
    comments: z.ZodOptional<z.ZodString>;
    currencyCode: z.ZodOptional<z.ZodString>;
    customerIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    discounts: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    lastName: z.ZodOptional<z.ZodString>;
    lineItems: z.ZodArray<z.ZodAny>;
    orderDate: z.ZodOptional<z.ZodString>;
    orderNumber: z.ZodString;
    payments: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    salesChannel: z.ZodString;
    shippingAddress: z.ZodOptional<z.ZodAny>;
    shippingAmount: z.ZodNumber;
    shippingInfo: z.ZodOptional<z.ZodAny>;
    status: z.ZodOptional<z.ZodLiteral<"CREATED">>;
    subtotal: z.ZodNumber;
    taxAmount: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type Order = z.infer<typeof Order>;
//# sourceMappingURL=Order.d.ts.map