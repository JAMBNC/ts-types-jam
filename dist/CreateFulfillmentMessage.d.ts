import { z } from "zod";
declare const _CreateFulfillmentMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"create_fulfillment">;
    payload: import("./CreateFulfillmentPayload.js").CreateFulfillmentPayloadSchema;
}, z.core.$strict>;
type _CreateFulfillmentMessageSchema = typeof _CreateFulfillmentMessage;
export interface CreateFulfillmentMessageSchema extends _CreateFulfillmentMessageSchema {
}
export declare const CreateFulfillmentMessage: CreateFulfillmentMessageSchema;
export type CreateFulfillmentMessage = z.infer<typeof CreateFulfillmentMessage>;
export {};
//# sourceMappingURL=CreateFulfillmentMessage.d.ts.map