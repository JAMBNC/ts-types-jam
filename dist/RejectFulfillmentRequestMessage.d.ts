import { z } from "zod";
export declare const RejectFulfillmentRequestMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"reject_fulfillment_request">;
    payload: z.ZodObject<{
        fulfillmentOrderId: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type RejectFulfillmentRequestMessage = z.infer<typeof RejectFulfillmentRequestMessage>;
//# sourceMappingURL=RejectFulfillmentRequestMessage.d.ts.map