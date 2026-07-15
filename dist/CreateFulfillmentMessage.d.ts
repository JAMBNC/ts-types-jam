import { z } from "zod";
export declare const CreateFulfillmentMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"create_fulfillment">;
    payload: z.ZodObject<{
        fulfillmentOrderId: z.ZodString;
        lineItems: z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
            fulfillmentOrderLineItemId: z.ZodString;
            quantity: z.ZodNumber;
        }, z.core.$strict>>, z.ZodNull]>;
        tracking: z.ZodUnion<readonly [z.ZodObject<{
            company: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            numbers: z.ZodArray<z.ZodString>;
            url: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$strict>, z.ZodNull]>;
        notifyCustomer: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type CreateFulfillmentMessage = z.infer<typeof CreateFulfillmentMessage>;
//# sourceMappingURL=CreateFulfillmentMessage.d.ts.map