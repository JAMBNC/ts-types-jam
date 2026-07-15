import { z } from "zod";
import { CreateFulfillmentPayload } from "./CreateFulfillmentPayload.js";
export const CreateFulfillmentMessage = z
    .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("create_fulfillment"),
    /**Fulfill a fulfillment order. lineItems null means fulfill all remaining line items. tracking may be attached now or later via update_tracking.*/
    payload: CreateFulfillmentPayload,
})
    .strict();
