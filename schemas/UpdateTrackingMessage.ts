import { z } from "zod";
import { UpdateTrackingPayload } from "./UpdateTrackingPayload.js";

export const UpdateTrackingMessage = z
  .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("update_tracking"),
    /**Set/replace tracking on an existing fulfillment. fulfillmentId null lets the mapper resolve the fulfillment from the fulfillment order.*/
    payload: UpdateTrackingPayload,
  })
  .strict();
export type UpdateTrackingMessage = z.infer<typeof UpdateTrackingMessage>;
