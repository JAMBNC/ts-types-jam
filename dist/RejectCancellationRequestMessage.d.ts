import { z } from "zod";
export declare const RejectCancellationRequestMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"reject_cancellation_request">;
    payload: z.ZodObject<{
        fulfillmentOrderId: z.ZodString;
        message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type RejectCancellationRequestMessage = z.infer<typeof RejectCancellationRequestMessage>;
//# sourceMappingURL=RejectCancellationRequestMessage.d.ts.map