import { z } from "zod";
import { FulfillmentOrder } from "./FulfillmentOrder.js";

const _FulfillmentRequestPayload = z
  .object({ fulfillmentOrders: z.array(FulfillmentOrder).min(1) })
  .strict();
type _FulfillmentRequestPayloadSchema = typeof _FulfillmentRequestPayload;
export interface FulfillmentRequestPayloadSchema extends _FulfillmentRequestPayloadSchema {}
export const FulfillmentRequestPayload: FulfillmentRequestPayloadSchema =
  _FulfillmentRequestPayload;
export type FulfillmentRequestPayload = z.infer<
  typeof FulfillmentRequestPayload
>;
