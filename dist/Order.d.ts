import { z } from "zod";
declare const _Order: z.ZodObject<{
    billingAddress: import("./Address.js").AddressSchema;
    comments: z.ZodOptional<z.ZodString>;
    currencyCode: z.ZodOptional<z.ZodString>;
    customerIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    discounts: z.ZodOptional<z.ZodArray<import("./Discount.js").DiscountSchema>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    lastName: z.ZodOptional<z.ZodString>;
    lineItems: z.ZodArray<import("./LineItem.js").LineItemSchema>;
    orderDate: z.ZodOptional<z.ZodString>;
    orderNumber: z.ZodString;
    payments: z.ZodOptional<z.ZodArray<import("./Payment.js").PaymentSchema>>;
    salesChannel: z.ZodString;
    shippingAddress: z.ZodOptional<import("./Address.js").AddressSchema>;
    shippingAmount: z.ZodDefault<z.ZodNumber>;
    shippingInfo: z.ZodOptional<import("./ShippingInfo.js").ShippingInfoSchema>;
    status: z.ZodOptional<import("./Status.js").StatusSchema>;
    subtotal: z.ZodDefault<z.ZodNumber>;
    taxAmount: z.ZodDefault<z.ZodNumber>;
    total: z.ZodDefault<z.ZodNumber>;
}, z.core.$loose>;
type _OrderSchema = typeof _Order;
export interface OrderSchema extends _OrderSchema {
}
export declare const Order: OrderSchema;
export type Order = z.infer<typeof Order>;
export {};
//# sourceMappingURL=Order.d.ts.map