import { z } from "zod";
declare const _CancellationRequestMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"cancellation_request">;
    payload: import("./CancellationRequestPayload.js").CancellationRequestPayloadSchema;
}, z.core.$strict>;
type _CancellationRequestMessageSchema = typeof _CancellationRequestMessage;
export interface CancellationRequestMessageSchema extends _CancellationRequestMessageSchema {
}
/**A merchant requested cancellation of an accepted fulfillment order.*/
export declare const CancellationRequestMessage: CancellationRequestMessageSchema;
export type CancellationRequestMessage = z.infer<typeof CancellationRequestMessage>;
export {};
//# sourceMappingURL=CancellationRequestMessage.d.ts.map