import { z } from "zod";
declare const _FulfillmentOrderDetails: z.ZodObject<{
    subtotal: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
    totalTax: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
    totalShipping: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
    totalDiscounts: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
    total: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
    shippingLines: z.ZodOptional<z.ZodArray<import("./FulfillmentShippingLine.js").FulfillmentShippingLineSchema>>;
    taxLines: z.ZodOptional<z.ZodArray<import("./FulfillmentTaxLine.js").FulfillmentTaxLineSchema>>;
    discounts: z.ZodOptional<z.ZodArray<import("./FulfillmentCartDiscount.js").FulfillmentCartDiscountSchema>>;
    transactions: z.ZodOptional<z.ZodArray<import("./FulfillmentTransaction.js").FulfillmentTransactionSchema>>;
    customer: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentCustomer.js").FulfillmentCustomerSchema, z.ZodNull]>>;
    billingAddress: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentOrderDestination.js").FulfillmentOrderDestinationSchema, z.ZodNull]>>;
}, z.core.$strict>;
type _FulfillmentOrderDetailsSchema = typeof _FulfillmentOrderDetails;
export interface FulfillmentOrderDetailsSchema extends _FulfillmentOrderDetailsSchema {
}
/**Order-level financial and party detail hydrated alongside the fulfillment order. Amounts are in the shop currency.*/
export declare const FulfillmentOrderDetails: FulfillmentOrderDetailsSchema;
export type FulfillmentOrderDetails = z.infer<typeof FulfillmentOrderDetails>;
export {};
//# sourceMappingURL=FulfillmentOrderDetails.d.ts.map