import { z } from "zod";
/**Set/replace tracking on an existing fulfillment. fulfillmentId null lets the mapper resolve the fulfillment from the fulfillment order.*/
export declare const UpdateTrackingPayload: z.ZodObject<{
    fulfillmentId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    fulfillmentOrderId: z.ZodString;
    tracking: z.ZodObject<{
        company: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        numbers: z.ZodArray<z.ZodString>;
        url: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>;
    notifyCustomer: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strict>;
export type UpdateTrackingPayload = z.infer<typeof UpdateTrackingPayload>;
//# sourceMappingURL=UpdateTrackingPayload.d.ts.map