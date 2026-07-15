import { z } from "zod";
export declare const UpdateTrackingMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"update_tracking">;
    payload: z.ZodObject<{
        fulfillmentId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        fulfillmentOrderId: z.ZodString;
        tracking: z.ZodObject<{
            company: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            numbers: z.ZodArray<z.ZodString>;
            url: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$strict>;
        notifyCustomer: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type UpdateTrackingMessage = z.infer<typeof UpdateTrackingMessage>;
//# sourceMappingURL=UpdateTrackingMessage.d.ts.map