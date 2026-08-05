import { z } from "zod";
declare const _RejectFulfillmentRequestMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"reject_fulfillment_request">;
    payload: import("./RejectFulfillmentRequestPayload.js").RejectFulfillmentRequestPayloadSchema;
}, z.core.$strict>;
type _RejectFulfillmentRequestMessageSchema = typeof _RejectFulfillmentRequestMessage;
export interface RejectFulfillmentRequestMessageSchema extends _RejectFulfillmentRequestMessageSchema {
}
export declare const RejectFulfillmentRequestMessage: RejectFulfillmentRequestMessageSchema;
export type RejectFulfillmentRequestMessage = z.infer<typeof RejectFulfillmentRequestMessage>;
export {};
//# sourceMappingURL=RejectFulfillmentRequestMessage.d.ts.map