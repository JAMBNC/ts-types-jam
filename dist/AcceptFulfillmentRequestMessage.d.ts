import { z } from "zod";
export declare const AcceptFulfillmentRequestMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"accept_fulfillment_request">;
    payload: z.ZodObject<{
        fulfillmentOrderId: z.ZodString;
        message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AcceptFulfillmentRequestMessage = z.infer<typeof AcceptFulfillmentRequestMessage>;
//# sourceMappingURL=AcceptFulfillmentRequestMessage.d.ts.map