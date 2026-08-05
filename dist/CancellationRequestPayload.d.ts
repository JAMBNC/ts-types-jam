import { z } from "zod";
declare const _CancellationRequestPayload: z.ZodObject<{
    fulfillmentOrders: z.ZodArray<import("./FulfillmentOrder.js").FulfillmentOrderSchema>;
}, z.core.$strict>;
type _CancellationRequestPayloadSchema = typeof _CancellationRequestPayload;
export interface CancellationRequestPayloadSchema extends _CancellationRequestPayloadSchema {
}
export declare const CancellationRequestPayload: CancellationRequestPayloadSchema;
export type CancellationRequestPayload = z.infer<typeof CancellationRequestPayload>;
export {};
//# sourceMappingURL=CancellationRequestPayload.d.ts.map