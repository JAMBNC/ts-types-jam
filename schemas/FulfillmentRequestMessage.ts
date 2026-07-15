import { z } from "zod";
import { FulfillmentRequestPayload } from "./FulfillmentRequestPayload.js";

/**A merchant requested fulfillment; the mapper hydrated the fulfillment orders.*/
export const FulfillmentRequestMessage = z
  .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("fulfillment_request"),
    payload: FulfillmentRequestPayload,
  })
  .strict()
  .describe(
    "A merchant requested fulfillment; the mapper hydrated the fulfillment orders.",
  );
export type FulfillmentRequestMessage = z.infer<
  typeof FulfillmentRequestMessage
>;
