import { z } from "zod";
declare const _AcceptCancellationRequestMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"accept_cancellation_request">;
    payload: import("./AcceptCancellationRequestPayload.js").AcceptCancellationRequestPayloadSchema;
}, z.core.$strict>;
type _AcceptCancellationRequestMessageSchema = typeof _AcceptCancellationRequestMessage;
export interface AcceptCancellationRequestMessageSchema extends _AcceptCancellationRequestMessageSchema {
}
export declare const AcceptCancellationRequestMessage: AcceptCancellationRequestMessageSchema;
export type AcceptCancellationRequestMessage = z.infer<typeof AcceptCancellationRequestMessage>;
export {};
//# sourceMappingURL=AcceptCancellationRequestMessage.d.ts.map