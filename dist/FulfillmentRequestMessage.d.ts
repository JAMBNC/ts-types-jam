import { z } from "zod";
declare const _FulfillmentRequestMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"fulfillment_request">;
    payload: import("./FulfillmentRequestPayload.js").FulfillmentRequestPayloadSchema;
}, z.core.$strict>;
type _FulfillmentRequestMessageSchema = typeof _FulfillmentRequestMessage;
export interface FulfillmentRequestMessageSchema extends _FulfillmentRequestMessageSchema {
}
/**A merchant requested fulfillment; the mapper hydrated the fulfillment orders.*/
export declare const FulfillmentRequestMessage: FulfillmentRequestMessageSchema;
export type FulfillmentRequestMessage = z.infer<typeof FulfillmentRequestMessage>;
export {};
//# sourceMappingURL=FulfillmentRequestMessage.d.ts.map