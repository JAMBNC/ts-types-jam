import { z } from "zod";
import { FulfillmentOrder } from "./FulfillmentOrder.js";

const _CancellationRequestPayload = z
  .object({ fulfillmentOrders: z.array(FulfillmentOrder).min(1) })
  .strict();
type _CancellationRequestPayloadSchema = typeof _CancellationRequestPayload;
export interface CancellationRequestPayloadSchema extends _CancellationRequestPayloadSchema {}
export const CancellationRequestPayload: CancellationRequestPayloadSchema =
  _CancellationRequestPayload;
export type CancellationRequestPayload = z.infer<
  typeof CancellationRequestPayload
>;
