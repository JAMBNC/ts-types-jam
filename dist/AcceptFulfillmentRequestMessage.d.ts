import { z } from "zod";
declare const _AcceptFulfillmentRequestMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"accept_fulfillment_request">;
    payload: import("./AcceptFulfillmentRequestPayload.js").AcceptFulfillmentRequestPayloadSchema;
}, z.core.$strict>;
type _AcceptFulfillmentRequestMessageSchema = typeof _AcceptFulfillmentRequestMessage;
export interface AcceptFulfillmentRequestMessageSchema extends _AcceptFulfillmentRequestMessageSchema {
}
export declare const AcceptFulfillmentRequestMessage: AcceptFulfillmentRequestMessageSchema;
export type AcceptFulfillmentRequestMessage = z.infer<typeof AcceptFulfillmentRequestMessage>;
export {};
//# sourceMappingURL=AcceptFulfillmentRequestMessage.d.ts.map