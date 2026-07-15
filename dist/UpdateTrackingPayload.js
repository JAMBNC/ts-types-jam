import { z } from "zod";
import { ExternalId } from "./ExternalId.js";
import { TrackingInfo } from "./TrackingInfo.js";
/**Set/replace tracking on an existing fulfillment. fulfillmentId null lets the mapper resolve the fulfillment from the fulfillment order.*/
export const UpdateTrackingPayload = z
    .object({
    fulfillmentId: z.union([ExternalId, z.null()]),
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    fulfillmentOrderId: ExternalId,
    /**Shipment tracking attached to a fulfillment. numbers holds one or more tracking numbers; company is the carrier name (channels that recognize it build clickable links).*/
    tracking: TrackingInfo,
    notifyCustomer: z.boolean().default(true),
})
    .strict()
    .describe("Set/replace tracking on an existing fulfillment. fulfillmentId null lets the mapper resolve the fulfillment from the fulfillment order.");
