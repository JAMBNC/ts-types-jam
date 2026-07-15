import { z } from "zod";
import { AcceptFulfillmentRequestPayload } from "./AcceptFulfillmentRequestPayload.js";

export const AcceptFulfillmentRequestMessage = z
  .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("accept_fulfillment_request"),
    payload: AcceptFulfillmentRequestPayload,
  })
  .strict();
export type AcceptFulfillmentRequestMessage = z.infer<
  typeof AcceptFulfillmentRequestMessage
>;
