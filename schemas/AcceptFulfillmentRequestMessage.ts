import { z } from "zod";
import { AcceptFulfillmentRequestPayload } from "./AcceptFulfillmentRequestPayload.js";

const _AcceptFulfillmentRequestMessage = z
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
type _AcceptFulfillmentRequestMessageSchema =
  typeof _AcceptFulfillmentRequestMessage;
export interface AcceptFulfillmentRequestMessageSchema extends _AcceptFulfillmentRequestMessageSchema {}
export const AcceptFulfillmentRequestMessage: AcceptFulfillmentRequestMessageSchema =
  _AcceptFulfillmentRequestMessage;
export type AcceptFulfillmentRequestMessage = z.infer<
  typeof AcceptFulfillmentRequestMessage
>;
