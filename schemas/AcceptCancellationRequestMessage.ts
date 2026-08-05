import { z } from "zod";
import { AcceptCancellationRequestPayload } from "./AcceptCancellationRequestPayload.js";

const _AcceptCancellationRequestMessage = z
  .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("accept_cancellation_request"),
    payload: AcceptCancellationRequestPayload,
  })
  .strict();
type _AcceptCancellationRequestMessageSchema =
  typeof _AcceptCancellationRequestMessage;
export interface AcceptCancellationRequestMessageSchema extends _AcceptCancellationRequestMessageSchema {}
export const AcceptCancellationRequestMessage: AcceptCancellationRequestMessageSchema =
  _AcceptCancellationRequestMessage;
export type AcceptCancellationRequestMessage = z.infer<
  typeof AcceptCancellationRequestMessage
>;
