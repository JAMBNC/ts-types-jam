import { z } from "zod";
import { CancellationRequestPayload } from "./CancellationRequestPayload.js";

/**A merchant requested cancellation of an accepted fulfillment order.*/
export const CancellationRequestMessage = z
  .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("cancellation_request"),
    payload: CancellationRequestPayload,
  })
  .strict()
  .describe(
    "A merchant requested cancellation of an accepted fulfillment order.",
  );
export type CancellationRequestMessage = z.infer<
  typeof CancellationRequestMessage
>;
