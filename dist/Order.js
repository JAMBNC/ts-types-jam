import { z } from "zod";
export const Order = z.object({
    billingAddress: z.any(),
    comments: z.string().optional(),
    currencyCode: z.string().optional(),
    customerIdentifiers: z.record(z.any()).optional(),
    discounts: z.array(z.any()).optional(),
    email: z.string().optional(),
    firstName: z.string().optional(),
    identifiers: z.record(z.any()).optional(),
    lastName: z.string().optional(),
    lineItems: z.array(z.any()).min(1),
    orderDate: z.string().datetime({ offset: true }).optional(),
    orderNumber: z
        .string()
        .min(1)
        .max(50)
        .describe("Globally unique orderNumber.  Usually a combination of sales channel and order number"),
    payments: z.array(z.any()).optional(),
    salesChannel: z.string(),
    shippingAddress: z.any().optional(),
    shippingAmount: z.number().gte(0),
    shippingInfo: z.any().optional(),
    status: z.literal("CREATED").optional(),
    subtotal: z.number().gte(0),
    taxAmount: z.number().gte(0),
    total: z.number().gte(0),
});
