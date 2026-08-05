import { z } from "zod";
declare const _FulfillmentRequestPayload: z.ZodObject<{
    fulfillmentOrders: z.ZodArray<import("./FulfillmentOrder.js").FulfillmentOrderSchema>;
}, z.core.$strict>;
type _FulfillmentRequestPayloadSchema = typeof _FulfillmentRequestPayload;
export interface FulfillmentRequestPayloadSchema extends _FulfillmentRequestPayloadSchema {
}
export declare const FulfillmentRequestPayload: FulfillmentRequestPayloadSchema;
export type FulfillmentRequestPayload = z.infer<typeof FulfillmentRequestPayload>;
export {};
//# sourceMappingURL=FulfillmentRequestPayload.d.ts.map