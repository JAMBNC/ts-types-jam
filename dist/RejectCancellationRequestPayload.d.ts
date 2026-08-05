import { z } from "zod";
declare const _RejectCancellationRequestPayload: z.ZodObject<{
    fulfillmentOrderId: import("./ExternalId.js").ExternalIdSchema;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
type _RejectCancellationRequestPayloadSchema = typeof _RejectCancellationRequestPayload;
export interface RejectCancellationRequestPayloadSchema extends _RejectCancellationRequestPayloadSchema {
}
export declare const RejectCancellationRequestPayload: RejectCancellationRequestPayloadSchema;
export type RejectCancellationRequestPayload = z.infer<typeof RejectCancellationRequestPayload>;
export {};
//# sourceMappingURL=RejectCancellationRequestPayload.d.ts.map