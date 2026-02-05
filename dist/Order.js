import { z } from "zod";
import { Address } from "./Address.js";
import { Discount } from "./Discount.js";
import { LineItem } from "./LineItem.js";
import { Payment } from "./Payment.js";
import { ShippingInfo } from "./ShippingInfo.js";
import { Status } from "./Status.js";
export const Order = z
    .object({
    billingAddress: Address,
    comments: z.string().optional(),
    currencyCode: z.string().optional(),
    customerIdentifiers: z.record(z.any()).optional(),
    discounts: z.array(Discount).optional(),
    email: z.string().optional(),
    firstName: z.string().optional(),
    identifiers: z.record(z.any()).optional(),
    lastName: z.string().optional(),
    lineItems: z.array(LineItem).min(1),
    orderDate: z.string().datetime({ offset: true }).optional(),
    /**Globally unique orderNumber.  Usually a combination of sales channel and order number*/
    orderNumber: z
        .string()
        .min(1)
        .max(50)
        .describe("Globally unique orderNumber.  Usually a combination of sales channel and order number"),
    payments: z.array(Payment).optional(),
    salesChannel: z.string(),
    shippingAddress: Address.optional(),
    shippingAmount: z.number().gte(0),
    shippingInfo: ShippingInfo.optional(),
    status: Status.optional(),
    subtotal: z.number().gte(0),
    taxAmount: z.number().gte(0),
    total: z.number().gte(0),
})
    .passthrough();
