import { z } from "zod";
declare const _AcceptFulfillmentRequestPayload: z.ZodObject<{
    fulfillmentOrderId: import("./ExternalId.js").ExternalIdSchema;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
type _AcceptFulfillmentRequestPayloadSchema = typeof _AcceptFulfillmentRequestPayload;
export interface AcceptFulfillmentRequestPayloadSchema extends _AcceptFulfillmentRequestPayloadSchema {
}
export declare const AcceptFulfillmentRequestPayload: AcceptFulfillmentRequestPayloadSchema;
export type AcceptFulfillmentRequestPayload = z.infer<typeof AcceptFulfillmentRequestPayload>;
export {};
//# sourceMappingURL=AcceptFulfillmentRequestPayload.d.ts.map