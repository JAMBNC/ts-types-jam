import { z } from "zod";
declare const _RejectCancellationRequestMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"reject_cancellation_request">;
    payload: import("./RejectCancellationRequestPayload.js").RejectCancellationRequestPayloadSchema;
}, z.core.$strict>;
type _RejectCancellationRequestMessageSchema = typeof _RejectCancellationRequestMessage;
export interface RejectCancellationRequestMessageSchema extends _RejectCancellationRequestMessageSchema {
}
export declare const RejectCancellationRequestMessage: RejectCancellationRequestMessageSchema;
export type RejectCancellationRequestMessage = z.infer<typeof RejectCancellationRequestMessage>;
export {};
//# sourceMappingURL=RejectCancellationRequestMessage.d.ts.map