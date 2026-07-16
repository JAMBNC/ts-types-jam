import { z } from "zod";
/**The mapper's ack for one outbound action. correlationId is the outbound action message's messageId.*/
export declare const ActionResultMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodString;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"action_result">;
    payload: z.ZodObject<{
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
}, z.core.$strict>;
export type ActionResultMessage = z.infer<typeof ActionResultMessage>;
//# sourceMappingURL=ActionResultMessage.d.ts.map