import { z } from "zod";
declare const _CloseFulfillmentOrderPayload: z.ZodObject<{
    fulfillmentOrderId: import("./ExternalId.js").ExternalIdSchema;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
type _CloseFulfillmentOrderPayloadSchema = typeof _CloseFulfillmentOrderPayload;
export interface CloseFulfillmentOrderPayloadSchema extends _CloseFulfillmentOrderPayloadSchema {
}
/**Close a fulfillment order the service accepted but can't complete (moves it to an incomplete/closed state on the channel).*/
export declare const CloseFulfillmentOrderPayload: CloseFulfillmentOrderPayloadSchema;
export type CloseFulfillmentOrderPayload = z.infer<typeof CloseFulfillmentOrderPayload>;
export {};
//# sourceMappingURL=CloseFulfillmentOrderPayload.d.ts.map