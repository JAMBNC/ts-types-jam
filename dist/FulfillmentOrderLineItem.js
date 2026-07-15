import { z } from "zod";
import { ExternalId } from "./ExternalId.js";
/**A single line item on a hydrated fulfillment order.*/
export const FulfillmentOrderLineItem = z
    .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    id: ExternalId,
    /**The id of the underlying order line item in the source channel, when distinct from id.*/
    orderLineItemId: z
        .union([ExternalId, z.null()])
        .describe("The id of the underlying order line item in the source channel, when distinct from id."),
    /**Channel SKU as configured on the store.*/
    sku: z
        .union([
        z.string().describe("Channel SKU as configured on the store."),
        z.null().describe("Channel SKU as configured on the store."),
    ])
        .describe("Channel SKU as configured on the store."),
    quantity: z.number().int().gte(0),
    remainingQuantity: z.union([z.number().int().gte(0), z.null()]).optional(),
})
    .strict()
    .describe("A single line item on a hydrated fulfillment order.");
