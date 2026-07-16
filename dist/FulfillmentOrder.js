import { z } from "zod";
import { ExternalId } from "./ExternalId.js";
import { FulfillmentOrderDestination } from "./FulfillmentOrderDestination.js";
import { FulfillmentOrderDetails } from "./FulfillmentOrderDetails.js";
import { FulfillmentOrderLineItem } from "./FulfillmentOrderLineItem.js";
/**A mapper-hydrated fulfillment order: enough for the backend to fulfill without calling the channel.*/
export const FulfillmentOrder = z
    .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    id: ExternalId,
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    orderId: ExternalId,
    /**Human order name/number, e.g. "#1001".*/
    orderName: z
        .union([
        z.string().describe('Human order name/number, e.g. "#1001".'),
        z.null().describe('Human order name/number, e.g. "#1001".'),
    ])
        .describe('Human order name/number, e.g. "#1001".'),
    /**An alternate order reference the backend may match on, when the channel provides one distinct from orderId (e.g. Shopify's numeric legacy order id).*/
    orderReference: z
        .union([
        z
            .string()
            .describe("An alternate order reference the backend may match on, when the channel provides one distinct from orderId (e.g. Shopify's numeric legacy order id)."),
        z
            .null()
            .describe("An alternate order reference the backend may match on, when the channel provides one distinct from orderId (e.g. Shopify's numeric legacy order id)."),
    ])
        .describe("An alternate order reference the backend may match on, when the channel provides one distinct from orderId (e.g. Shopify's numeric legacy order id).")
        .optional(),
    status: z.string(),
    requestStatus: z.string(),
    destination: z.union([FulfillmentOrderDestination, z.null()]),
    lineItems: z.array(FulfillmentOrderLineItem),
    /**The shipping/delivery method type, e.g. SHIPPING, PICKUP, LOCAL.*/
    deliveryMethod: z
        .union([
        z
            .object({ methodType: z.union([z.string(), z.null()]).optional() })
            .strict()
            .describe("The shipping/delivery method type, e.g. SHIPPING, PICKUP, LOCAL."),
        z
            .null()
            .describe("The shipping/delivery method type, e.g. SHIPPING, PICKUP, LOCAL."),
    ])
        .describe("The shipping/delivery method type, e.g. SHIPPING, PICKUP, LOCAL.")
        .optional(),
    /**Order-level detail (financials, parties). Present when the mapper hydrates the order.*/
    order: z
        .union([FulfillmentOrderDetails, z.null()])
        .describe("Order-level detail (financials, parties). Present when the mapper hydrates the order.")
        .optional(),
    /**Message/reason the merchant attached to the request, if any.*/
    merchantMessage: z
        .union([
        z
            .string()
            .describe("Message/reason the merchant attached to the request, if any."),
        z
            .null()
            .describe("Message/reason the merchant attached to the request, if any."),
    ])
        .describe("Message/reason the merchant attached to the request, if any.")
        .optional(),
})
    .strict()
    .describe("A mapper-hydrated fulfillment order: enough for the backend to fulfill without calling the channel.");
