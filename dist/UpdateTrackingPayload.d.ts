import { z } from "zod";
declare const _UpdateTrackingPayload: z.ZodObject<{
    fulfillmentId: z.ZodUnion<readonly [import("./ExternalId.js").ExternalIdSchema, z.ZodNull]>;
    fulfillmentOrderId: import("./ExternalId.js").ExternalIdSchema;
    tracking: import("./TrackingInfo.js").TrackingInfoSchema;
    notifyCustomer: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strict>;
type _UpdateTrackingPayloadSchema = typeof _UpdateTrackingPayload;
export interface UpdateTrackingPayloadSchema extends _UpdateTrackingPayloadSchema {
}
/**Set/replace tracking on an existing fulfillment. fulfillmentId null lets the mapper resolve the fulfillment from the fulfillment order.*/
export declare const UpdateTrackingPayload: UpdateTrackingPayloadSchema;
export type UpdateTrackingPayload = z.infer<typeof UpdateTrackingPayload>;
export {};
//# sourceMappingURL=UpdateTrackingPayload.d.ts.map