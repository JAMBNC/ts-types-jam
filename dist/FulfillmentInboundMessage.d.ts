import { z } from "zod";
declare const _FulfillmentInboundMessage: z.ZodUnion<readonly [import("./FulfillmentRequestMessage.js").FulfillmentRequestMessageSchema, import("./CancellationRequestMessage.js").CancellationRequestMessageSchema, import("./ActionResultMessage.js").ActionResultMessageSchema]>;
type _FulfillmentInboundMessageSchema = typeof _FulfillmentInboundMessage;
export interface FulfillmentInboundMessageSchema extends _FulfillmentInboundMessageSchema {
}
/**Discriminated union of all mapper-to-backend messages.*/
export declare const FulfillmentInboundMessage: FulfillmentInboundMessageSchema;
export type FulfillmentInboundMessage = z.infer<typeof FulfillmentInboundMessage>;
export {};
//# sourceMappingURL=FulfillmentInboundMessage.d.ts.map