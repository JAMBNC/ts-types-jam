import { z } from "zod";
import { ActionResultPayload } from "./ActionResultPayload.js";
/**The mapper's ack for one outbound action. correlationId is the outbound action message's messageId.*/
export const ActionResultMessage = z
    .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    /**The messageId of the outbound action this result is for.*/
    correlationId: z
        .string()
        .min(1)
        .describe("The messageId of the outbound action this result is for."),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("action_result"),
    /**Reports the real channel outcome of one outbound action, so the backend can reconcile state instead of assuming success on send.*/
    payload: ActionResultPayload,
})
    .strict()
    .describe("The mapper's ack for one outbound action. correlationId is the outbound action message's messageId.");
