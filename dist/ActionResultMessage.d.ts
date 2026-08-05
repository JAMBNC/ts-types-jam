import { z } from "zod";
declare const _ActionResultMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodString;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"action_result">;
    payload: import("./ActionResultPayload.js").ActionResultPayloadSchema;
}, z.core.$strict>;
type _ActionResultMessageSchema = typeof _ActionResultMessage;
export interface ActionResultMessageSchema extends _ActionResultMessageSchema {
}
/**The mapper's ack for one outbound action. correlationId is the outbound action message's messageId.*/
export declare const ActionResultMessage: ActionResultMessageSchema;
export type ActionResultMessage = z.infer<typeof ActionResultMessage>;
export {};
//# sourceMappingURL=ActionResultMessage.d.ts.map