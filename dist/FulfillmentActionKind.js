import { z } from "zod";
/**The outbound action a fulfillment action result reports on.*/
export const FulfillmentActionKind = z
    .enum([
    "accept_fulfillment_request",
    "reject_fulfillment_request",
    "create_fulfillment",
    "update_tracking",
    "accept_cancellation_request",
    "reject_cancellation_request",
    "close_fulfillment_order",
])
    .describe("The outbound action a fulfillment action result reports on.");
