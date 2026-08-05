import { z } from "zod";

const _FulfillmentActionKind = z
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
type _FulfillmentActionKindSchema = typeof _FulfillmentActionKind;
export interface FulfillmentActionKindSchema extends _FulfillmentActionKindSchema {}
/**The outbound action a fulfillment action result reports on.*/
export const FulfillmentActionKind: FulfillmentActionKindSchema =
  _FulfillmentActionKind;
export type FulfillmentActionKind = z.infer<typeof FulfillmentActionKind>;
