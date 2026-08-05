import { z } from "zod";
import { ExternalId } from "./ExternalId.js";

const _AcceptFulfillmentRequestPayload = z
  .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    fulfillmentOrderId: ExternalId,
    message: z.union([z.string(), z.null()]).optional(),
  })
  .strict();
type _AcceptFulfillmentRequestPayloadSchema =
  typeof _AcceptFulfillmentRequestPayload;
export interface AcceptFulfillmentRequestPayloadSchema extends _AcceptFulfillmentRequestPayloadSchema {}
export const AcceptFulfillmentRequestPayload: AcceptFulfillmentRequestPayloadSchema =
  _AcceptFulfillmentRequestPayload;
export type AcceptFulfillmentRequestPayload = z.infer<
  typeof AcceptFulfillmentRequestPayload
>;
