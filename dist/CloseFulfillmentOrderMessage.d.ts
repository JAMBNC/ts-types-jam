import { z } from "zod";
declare const _CloseFulfillmentOrderMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"close_fulfillment_order">;
    payload: import("./CloseFulfillmentOrderPayload.js").CloseFulfillmentOrderPayloadSchema;
}, z.core.$strict>;
type _CloseFulfillmentOrderMessageSchema = typeof _CloseFulfillmentOrderMessage;
export interface CloseFulfillmentOrderMessageSchema extends _CloseFulfillmentOrderMessageSchema {
}
export declare const CloseFulfillmentOrderMessage: CloseFulfillmentOrderMessageSchema;
export type CloseFulfillmentOrderMessage = z.infer<typeof CloseFulfillmentOrderMessage>;
export {};
//# sourceMappingURL=CloseFulfillmentOrderMessage.d.ts.map