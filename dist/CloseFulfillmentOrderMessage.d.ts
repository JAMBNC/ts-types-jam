import { z } from "zod";
export declare const CloseFulfillmentOrderMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"close_fulfillment_order">;
    payload: z.ZodObject<{
        fulfillmentOrderId: z.ZodString;
        message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type CloseFulfillmentOrderMessage = z.infer<typeof CloseFulfillmentOrderMessage>;
//# sourceMappingURL=CloseFulfillmentOrderMessage.d.ts.map