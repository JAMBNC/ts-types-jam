import { z } from "zod";
/**Discriminated union of all backend-to-mapper action messages.*/
export declare const FulfillmentOutboundMessage: z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strict>, z.ZodObject<{
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
}, z.core.$strict>, z.ZodObject<{
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
}, z.core.$strict>, z.ZodObject<{
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
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"accept_cancellation_request">;
    payload: z.ZodObject<{
        fulfillmentOrderId: z.ZodString;
        message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
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
}, z.core.$strict>, z.ZodObject<{
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
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"set_inventory">;
    payload: z.ZodObject<{
        levels: z.ZodArray<z.ZodObject<{
            sku: z.ZodString;
            available: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>;
}, z.core.$strict>]>;
export type FulfillmentOutboundMessage = z.infer<typeof FulfillmentOutboundMessage>;
//# sourceMappingURL=FulfillmentOutboundMessage.d.ts.map