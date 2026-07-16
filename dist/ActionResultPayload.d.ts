import { z } from "zod";
/**Reports the real channel outcome of one outbound action, so the backend can reconcile state instead of assuming success on send.*/
export declare const ActionResultPayload: z.ZodObject<{
    action: z.ZodEnum<{
        accept_cancellation_request: "accept_cancellation_request";
        accept_fulfillment_request: "accept_fulfillment_request";
        close_fulfillment_order: "close_fulfillment_order";
        create_fulfillment: "create_fulfillment";
        reject_cancellation_request: "reject_cancellation_request";
        reject_fulfillment_request: "reject_fulfillment_request";
        update_tracking: "update_tracking";
    }>;
    fulfillmentOrderId: z.ZodString;
    status: z.ZodEnum<{
        failed: "failed";
        succeeded: "succeeded";
    }>;
    fulfillmentId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodNull]>>;
        message: z.ZodString;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type ActionResultPayload = z.infer<typeof ActionResultPayload>;
//# sourceMappingURL=ActionResultPayload.d.ts.map