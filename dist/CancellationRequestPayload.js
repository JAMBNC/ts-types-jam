import { z } from "zod";
import { FulfillmentOrder } from "./FulfillmentOrder.js";
const _CancellationRequestPayload = z
    .object({ fulfillmentOrders: z.array(FulfillmentOrder).min(1) })
    .strict();
export const CancellationRequestPayload = _CancellationRequestPayload;
