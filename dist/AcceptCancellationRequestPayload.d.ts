import { z } from "zod";
declare const _AcceptCancellationRequestPayload: z.ZodObject<{
    fulfillmentOrderId: import("./ExternalId.js").ExternalIdSchema;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
type _AcceptCancellationRequestPayloadSchema = typeof _AcceptCancellationRequestPayload;
export interface AcceptCancellationRequestPayloadSchema extends _AcceptCancellationRequestPayloadSchema {
}
export declare const AcceptCancellationRequestPayload: AcceptCancellationRequestPayloadSchema;
export type AcceptCancellationRequestPayload = z.infer<typeof AcceptCancellationRequestPayload>;
export {};
//# sourceMappingURL=AcceptCancellationRequestPayload.d.ts.map