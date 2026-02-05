import { z } from "zod";
import { LineItem } from "./LineItem.js";
export const Shipment = z
    .object({
    carrier: z.string().optional(),
    comments: z.string().optional(),
    currencyCode: z.string().optional(),
    estimatedDeliveryDate: z.string().datetime({ offset: true }).optional(),
    identifiers: z.record(z.any()).optional(),
    lineItems: z.array(LineItem).optional(),
    orderIdentifiers: z.record(z.any()).optional(),
    /**Globally unique orderNumber.  Usually a combination of sales channel and order number*/
    orderNumber: z
        .string()
        .min(1)
        .max(50)
        .describe("Globally unique orderNumber.  Usually a combination of sales channel and order number"),
    shipmentDate: z.string().datetime({ offset: true }),
    trackingNumber: z.string().optional(),
    trackingUrl: z.string().optional(),
})
    .passthrough();
