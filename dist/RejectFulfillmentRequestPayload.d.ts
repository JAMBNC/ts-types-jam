import { z } from "zod";
declare const _RejectFulfillmentRequestPayload: z.ZodObject<{
    fulfillmentOrderId: import("./ExternalId.js").ExternalIdSchema;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
type _RejectFulfillmentRequestPayloadSchema = typeof _RejectFulfillmentRequestPayload;
export interface RejectFulfillmentRequestPayloadSchema extends _RejectFulfillmentRequestPayloadSchema {
}
export declare const RejectFulfillmentRequestPayload: RejectFulfillmentRequestPayloadSchema;
export type RejectFulfillmentRequestPayload = z.infer<typeof RejectFulfillmentRequestPayload>;
export {};
//# sourceMappingURL=RejectFulfillmentRequestPayload.d.ts.map