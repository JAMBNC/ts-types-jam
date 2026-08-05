import { z } from "zod";
import { ExternalId } from "./ExternalId.js";
import { FulfillmentLineItemRef } from "./FulfillmentLineItemRef.js";
import { TrackingInfo } from "./TrackingInfo.js";

const _CreateFulfillmentPayload = z
  .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    fulfillmentOrderId: ExternalId,
    lineItems: z.union([z.array(FulfillmentLineItemRef), z.null()]),
    tracking: z.union([TrackingInfo, z.null()]),
    notifyCustomer: z.boolean().default(true),
  })
  .strict()
  .describe(
    "Fulfill a fulfillment order. lineItems null means fulfill all remaining line items. tracking may be attached now or later via update_tracking.",
  );
type _CreateFulfillmentPayloadSchema = typeof _CreateFulfillmentPayload;
export interface CreateFulfillmentPayloadSchema extends _CreateFulfillmentPayloadSchema {}
/**Fulfill a fulfillment order. lineItems null means fulfill all remaining line items. tracking may be attached now or later via update_tracking.*/
export const CreateFulfillmentPayload: CreateFulfillmentPayloadSchema =
  _CreateFulfillmentPayload;
export type CreateFulfillmentPayload = z.infer<typeof CreateFulfillmentPayload>;
