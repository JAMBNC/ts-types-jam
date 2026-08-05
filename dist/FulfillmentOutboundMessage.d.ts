import { z } from "zod";
declare const _FulfillmentOutboundMessage: z.ZodUnion<readonly [import("./AcceptFulfillmentRequestMessage.js").AcceptFulfillmentRequestMessageSchema, import("./RejectFulfillmentRequestMessage.js").RejectFulfillmentRequestMessageSchema, import("./CreateFulfillmentMessage.js").CreateFulfillmentMessageSchema, import("./UpdateTrackingMessage.js").UpdateTrackingMessageSchema, import("./AcceptCancellationRequestMessage.js").AcceptCancellationRequestMessageSchema, import("./RejectCancellationRequestMessage.js").RejectCancellationRequestMessageSchema, import("./CloseFulfillmentOrderMessage.js").CloseFulfillmentOrderMessageSchema, import("./SetInventoryMessage.js").SetInventoryMessageSchema]>;
type _FulfillmentOutboundMessageSchema = typeof _FulfillmentOutboundMessage;
export interface FulfillmentOutboundMessageSchema extends _FulfillmentOutboundMessageSchema {
}
/**Discriminated union of all backend-to-mapper action messages.*/
export declare const FulfillmentOutboundMessage: FulfillmentOutboundMessageSchema;
export type FulfillmentOutboundMessage = z.infer<typeof FulfillmentOutboundMessage>;
export {};
//# sourceMappingURL=FulfillmentOutboundMessage.d.ts.map