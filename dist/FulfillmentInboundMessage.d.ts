import { z } from "zod";
/**Discriminated union of all mapper-to-backend messages.*/
export declare const FulfillmentInboundMessage: z.ZodUnion<readonly [z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"fulfillment_request">;
    payload: z.ZodObject<{
        fulfillmentOrders: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            orderId: z.ZodString;
            orderName: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            orderReference: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            status: z.ZodString;
            requestStatus: z.ZodString;
            destination: z.ZodUnion<readonly [z.ZodObject<{
                firstName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                lastName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                company: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                address1: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                address2: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                city: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                province: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                zip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                countryCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            }, z.core.$loose>, z.ZodNull]>;
            lineItems: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                orderLineItemId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                sku: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                quantity: z.ZodNumber;
                remainingQuantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
            }, z.core.$strict>>;
            merchantMessage: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"cancellation_request">;
    payload: z.ZodObject<{
        fulfillmentOrders: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            orderId: z.ZodString;
            orderName: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            orderReference: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            status: z.ZodString;
            requestStatus: z.ZodString;
            destination: z.ZodUnion<readonly [z.ZodObject<{
                firstName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                lastName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                company: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                address1: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                address2: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                city: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                province: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                zip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                countryCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            }, z.core.$loose>, z.ZodNull]>;
            lineItems: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                orderLineItemId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                sku: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                quantity: z.ZodNumber;
                remainingQuantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
            }, z.core.$strict>>;
            merchantMessage: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
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
            reject_fulfillment_request: "reject_fulfillment_request";
            create_fulfillment: "create_fulfillment";
            update_tracking: "update_tracking";
            reject_cancellation_request: "reject_cancellation_request";
            close_fulfillment_order: "close_fulfillment_order";
        }>;
        fulfillmentOrderId: z.ZodString;
        status: z.ZodEnum<{
            succeeded: "succeeded";
            failed: "failed";
        }>;
        fulfillmentId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodNull]>>;
            message: z.ZodString;
        }, z.core.$strict>>>;
    }, z.core.$strict>;
}, z.core.$strict>]>;
export type FulfillmentInboundMessage = z.infer<typeof FulfillmentInboundMessage>;
//# sourceMappingURL=FulfillmentInboundMessage.d.ts.map