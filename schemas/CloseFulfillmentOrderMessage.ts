import { z } from "zod";
import { CloseFulfillmentOrderPayload } from "./CloseFulfillmentOrderPayload.js";

const _CloseFulfillmentOrderMessage = z
  .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("close_fulfillment_order"),
    /**Close a fulfillment order the service accepted but can't complete (moves it to an incomplete/closed state on the channel).*/
    payload: CloseFulfillmentOrderPayload,
  })
  .strict();
type _CloseFulfillmentOrderMessageSchema = typeof _CloseFulfillmentOrderMessage;
export interface CloseFulfillmentOrderMessageSchema extends _CloseFulfillmentOrderMessageSchema {}
export const CloseFulfillmentOrderMessage: CloseFulfillmentOrderMessageSchema =
  _CloseFulfillmentOrderMessage;
export type CloseFulfillmentOrderMessage = z.infer<
  typeof CloseFulfillmentOrderMessage
>;
