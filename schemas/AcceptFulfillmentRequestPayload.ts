import { z } from "zod";
import { ExternalId } from "./ExternalId.js";

export const AcceptFulfillmentRequestPayload = z
  .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    fulfillmentOrderId: ExternalId,
    message: z.union([z.string(), z.null()]).optional(),
  })
  .strict();
export type AcceptFulfillmentRequestPayload = z.infer<
  typeof AcceptFulfillmentRequestPayload
>;
