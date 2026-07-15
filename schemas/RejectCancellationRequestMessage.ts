import { z } from "zod";
import { RejectCancellationRequestPayload } from "./RejectCancellationRequestPayload.js";

export const RejectCancellationRequestMessage = z
  .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("reject_cancellation_request"),
    payload: RejectCancellationRequestPayload,
  })
  .strict();
export type RejectCancellationRequestMessage = z.infer<
  typeof RejectCancellationRequestMessage
>;
