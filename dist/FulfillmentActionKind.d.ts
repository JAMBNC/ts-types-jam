import { z } from "zod";
/**The outbound action a fulfillment action result reports on.*/
export declare const FulfillmentActionKind: z.ZodEnum<{
    accept_cancellation_request: "accept_cancellation_request";
    accept_fulfillment_request: "accept_fulfillment_request";
    reject_fulfillment_request: "reject_fulfillment_request";
    create_fulfillment: "create_fulfillment";
    update_tracking: "update_tracking";
    reject_cancellation_request: "reject_cancellation_request";
    close_fulfillment_order: "close_fulfillment_order";
}>;
export type FulfillmentActionKind = z.infer<typeof FulfillmentActionKind>;
//# sourceMappingURL=FulfillmentActionKind.d.ts.map