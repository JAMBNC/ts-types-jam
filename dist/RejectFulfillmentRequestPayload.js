import { z } from "zod";
import { ExternalId } from "./ExternalId.js";
export const RejectFulfillmentRequestPayload = z
    .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    fulfillmentOrderId: ExternalId,
    /**A channel-specific rejection reason code when known (e.g. Shopify's FulfillmentOrderRejectionReason like INVENTORY_OUT_OF_STOCK or OTHER).*/
    reason: z
        .union([
        z
            .string()
            .describe("A channel-specific rejection reason code when known (e.g. Shopify's FulfillmentOrderRejectionReason like INVENTORY_OUT_OF_STOCK or OTHER)."),
        z
            .null()
            .describe("A channel-specific rejection reason code when known (e.g. Shopify's FulfillmentOrderRejectionReason like INVENTORY_OUT_OF_STOCK or OTHER)."),
    ])
        .describe("A channel-specific rejection reason code when known (e.g. Shopify's FulfillmentOrderRejectionReason like INVENTORY_OUT_OF_STOCK or OTHER).")
        .optional(),
    message: z.union([z.string(), z.null()]).optional(),
})
    .strict();
