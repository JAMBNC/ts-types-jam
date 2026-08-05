import { z } from "zod";
import { ExternalId } from "./ExternalId.js";
const _FulfillmentLineItemRef = z
    .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    fulfillmentOrderLineItemId: ExternalId,
    quantity: z.number().int().gte(1),
})
    .strict()
    .describe("A specific fulfillment order line item and quantity to fulfill (for partial fulfillment).");
/**A specific fulfillment order line item and quantity to fulfill (for partial fulfillment).*/
export const FulfillmentLineItemRef = _FulfillmentLineItemRef;
