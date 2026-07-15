import { z } from "zod";
import { FulfillmentOrder } from "./FulfillmentOrder.js";

export const FulfillmentRequestPayload = z
  .object({ fulfillmentOrders: z.array(FulfillmentOrder).min(1) })
  .strict();
export type FulfillmentRequestPayload = z.infer<
  typeof FulfillmentRequestPayload
>;
