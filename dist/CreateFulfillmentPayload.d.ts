import { z } from "zod";
declare const _CreateFulfillmentPayload: z.ZodObject<{
    fulfillmentOrderId: import("./ExternalId.js").ExternalIdSchema;
    lineItems: z.ZodUnion<readonly [z.ZodArray<import("./FulfillmentLineItemRef.js").FulfillmentLineItemRefSchema>, z.ZodNull]>;
    tracking: z.ZodUnion<readonly [import("./TrackingInfo.js").TrackingInfoSchema, z.ZodNull]>;
    notifyCustomer: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strict>;
type _CreateFulfillmentPayloadSchema = typeof _CreateFulfillmentPayload;
export interface CreateFulfillmentPayloadSchema extends _CreateFulfillmentPayloadSchema {
}
/**Fulfill a fulfillment order. lineItems null means fulfill all remaining line items. tracking may be attached now or later via update_tracking.*/
export declare const CreateFulfillmentPayload: CreateFulfillmentPayloadSchema;
export type CreateFulfillmentPayload = z.infer<typeof CreateFulfillmentPayload>;
export {};
//# sourceMappingURL=CreateFulfillmentPayload.d.ts.map