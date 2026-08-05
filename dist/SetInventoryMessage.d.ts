import { z } from "zod";
declare const _SetInventoryMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"set_inventory">;
    payload: import("./SetInventoryPayload.js").SetInventoryPayloadSchema;
}, z.core.$strict>;
type _SetInventoryMessageSchema = typeof _SetInventoryMessage;
export interface SetInventoryMessageSchema extends _SetInventoryMessageSchema {
}
/**The backend asserts current stock for a set of SKUs; the mapper applies them at its channel's fulfillment-service location. Not tied to a fulfillment order.*/
export declare const SetInventoryMessage: SetInventoryMessageSchema;
export type SetInventoryMessage = z.infer<typeof SetInventoryMessage>;
export {};
//# sourceMappingURL=SetInventoryMessage.d.ts.map