import { z } from "zod";
import { RejectFulfillmentRequestPayload } from "./RejectFulfillmentRequestPayload.js";

const _RejectFulfillmentRequestMessage = z
  .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("reject_fulfillment_request"),
    payload: RejectFulfillmentRequestPayload,
  })
  .strict();
type _RejectFulfillmentRequestMessageSchema =
  typeof _RejectFulfillmentRequestMessage;
export interface RejectFulfillmentRequestMessageSchema extends _RejectFulfillmentRequestMessageSchema {}
export const RejectFulfillmentRequestMessage: RejectFulfillmentRequestMessageSchema =
  _RejectFulfillmentRequestMessage;
export type RejectFulfillmentRequestMessage = z.infer<
  typeof RejectFulfillmentRequestMessage
>;
