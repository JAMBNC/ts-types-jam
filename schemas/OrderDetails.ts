import { z } from "zod";
import { CartDiscount } from "./CartDiscount.js";
import { Customer } from "./Customer.js";
import { FulfillmentOrderDestination } from "./FulfillmentOrderDestination.js";
import { Money } from "./Money.js";
import { ShippingLine } from "./ShippingLine.js";
import { TaxLine } from "./TaxLine.js";
import { Transaction } from "./Transaction.js";

/**Order-level financial and party detail hydrated alongside the fulfillment order. Amounts are in the shop currency.*/
export const OrderDetails = z
  .object({
    subtotal: z.union([Money, z.null()]).optional(),
    totalTax: z.union([Money, z.null()]).optional(),
    totalShipping: z.union([Money, z.null()]).optional(),
    totalDiscounts: z.union([Money, z.null()]).optional(),
    total: z.union([Money, z.null()]).optional(),
    shippingLines: z.array(ShippingLine).optional(),
    taxLines: z.array(TaxLine).optional(),
    /**Order-level (cart) discount applications.*/
    discounts: z
      .array(CartDiscount)
      .describe("Order-level (cart) discount applications.")
      .optional(),
    transactions: z.array(Transaction).optional(),
    customer: z.union([Customer, z.null()]).optional(),
    billingAddress: z.union([FulfillmentOrderDestination, z.null()]).optional(),
  })
  .strict()
  .describe(
    "Order-level financial and party detail hydrated alongside the fulfillment order. Amounts are in the shop currency.",
  );
export type OrderDetails = z.infer<typeof OrderDetails>;
