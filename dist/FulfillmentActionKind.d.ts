import { z } from "zod";
declare const _FulfillmentActionKind: z.ZodEnum<{
    accept_cancellation_request: "accept_cancellation_request";
    accept_fulfillment_request: "accept_fulfillment_request";
    close_fulfillment_order: "close_fulfillment_order";
    create_fulfillment: "create_fulfillment";
    reject_cancellation_request: "reject_cancellation_request";
    reject_fulfillment_request: "reject_fulfillment_request";
    update_tracking: "update_tracking";
}>;
type _FulfillmentActionKindSchema = typeof _FulfillmentActionKind;
export interface FulfillmentActionKindSchema extends _FulfillmentActionKindSchema {
}
/**The outbound action a fulfillment action result reports on.*/
export declare const FulfillmentActionKind: FulfillmentActionKindSchema;
export type FulfillmentActionKind = z.infer<typeof FulfillmentActionKind>;
export {};
//# sourceMappingURL=FulfillmentActionKind.d.ts.map