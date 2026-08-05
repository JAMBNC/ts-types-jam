import { z } from "zod";
declare const _UpdateTrackingMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"update_tracking">;
    payload: import("./UpdateTrackingPayload.js").UpdateTrackingPayloadSchema;
}, z.core.$strict>;
type _UpdateTrackingMessageSchema = typeof _UpdateTrackingMessage;
export interface UpdateTrackingMessageSchema extends _UpdateTrackingMessageSchema {
}
export declare const UpdateTrackingMessage: UpdateTrackingMessageSchema;
export type UpdateTrackingMessage = z.infer<typeof UpdateTrackingMessage>;
export {};
//# sourceMappingURL=UpdateTrackingMessage.d.ts.map