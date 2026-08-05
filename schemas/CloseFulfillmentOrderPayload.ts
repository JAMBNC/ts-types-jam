import { z } from "zod";
import { ExternalId } from "./ExternalId.js";

const _CloseFulfillmentOrderPayload = z
  .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    fulfillmentOrderId: ExternalId,
    message: z.union([z.string(), z.null()]).optional(),
  })
  .strict()
  .describe(
    "Close a fulfillment order the service accepted but can't complete (moves it to an incomplete/closed state on the channel).",
  );
type _CloseFulfillmentOrderPayloadSchema = typeof _CloseFulfillmentOrderPayload;
export interface CloseFulfillmentOrderPayloadSchema extends _CloseFulfillmentOrderPayloadSchema {}
/**Close a fulfillment order the service accepted but can't complete (moves it to an incomplete/closed state on the channel).*/
export const CloseFulfillmentOrderPayload: CloseFulfillmentOrderPayloadSchema =
  _CloseFulfillmentOrderPayload;
export type CloseFulfillmentOrderPayload = z.infer<
  typeof CloseFulfillmentOrderPayload
>;
