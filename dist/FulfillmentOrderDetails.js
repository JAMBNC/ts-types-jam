import { z } from "zod";
import { FulfillmentCartDiscount } from "./FulfillmentCartDiscount.js";
import { FulfillmentCustomer } from "./FulfillmentCustomer.js";
import { FulfillmentMoney } from "./FulfillmentMoney.js";
import { FulfillmentOrderDestination } from "./FulfillmentOrderDestination.js";
import { FulfillmentShippingLine } from "./FulfillmentShippingLine.js";
import { FulfillmentTaxLine } from "./FulfillmentTaxLine.js";
import { FulfillmentTransaction } from "./FulfillmentTransaction.js";
/**Order-level financial and party detail hydrated alongside the fulfillment order. Amounts are in the shop currency.*/
export const FulfillmentOrderDetails = z
    .object({
    subtotal: z.union([FulfillmentMoney, z.null()]).optional(),
    totalTax: z.union([FulfillmentMoney, z.null()]).optional(),
    totalShipping: z.union([FulfillmentMoney, z.null()]).optional(),
    totalDiscounts: z.union([FulfillmentMoney, z.null()]).optional(),
    total: z.union([FulfillmentMoney, z.null()]).optional(),
    shippingLines: z.array(FulfillmentShippingLine).optional(),
    taxLines: z.array(FulfillmentTaxLine).optional(),
    /**Order-level (cart) discount applications.*/
    discounts: z
        .array(FulfillmentCartDiscount)
        .describe("Order-level (cart) discount applications.")
        .optional(),
    transactions: z.array(FulfillmentTransaction).optional(),
    customer: z.union([FulfillmentCustomer, z.null()]).optional(),
    billingAddress: z.union([FulfillmentOrderDestination, z.null()]).optional(),
})
    .strict()
    .describe("Order-level financial and party detail hydrated alongside the fulfillment order. Amounts are in the shop currency.");
