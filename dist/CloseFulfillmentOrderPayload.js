import { z } from "zod";
import { ExternalId } from "./ExternalId.js";
/**Close a fulfillment order the service accepted but can't complete (moves it to an incomplete/closed state on the channel).*/
export const CloseFulfillmentOrderPayload = z
    .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    fulfillmentOrderId: ExternalId,
    message: z.union([z.string(), z.null()]).optional(),
})
    .strict()
    .describe("Close a fulfillment order the service accepted but can't complete (moves it to an incomplete/closed state on the channel).");
