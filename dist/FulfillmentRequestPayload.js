import { z } from "zod";
import { FulfillmentOrder } from "./FulfillmentOrder.js";
const _FulfillmentRequestPayload = z
    .object({ fulfillmentOrders: z.array(FulfillmentOrder).min(1) })
    .strict();
export const FulfillmentRequestPayload = _FulfillmentRequestPayload;
