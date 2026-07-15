import { z } from "zod";
import { ActionError } from "./ActionError.js";
import { ActionResultStatus } from "./ActionResultStatus.js";
import { ExternalId } from "./ExternalId.js";
import { FulfillmentActionKind } from "./FulfillmentActionKind.js";

/**Reports the real channel outcome of one outbound action, so the backend can reconcile state instead of assuming success on send.*/
export const ActionResultPayload = z
  .object({
    /**The outbound action a fulfillment action result reports on.*/
    action: FulfillmentActionKind,
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    fulfillmentOrderId: ExternalId,
    /**Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).*/
    status: ActionResultStatus,
    /**The created fulfillment's channel id when a create_fulfillment succeeded.*/
    fulfillmentId: z
      .union([ExternalId, z.null()])
      .describe(
        "The created fulfillment's channel id when a create_fulfillment succeeded.",
      )
      .optional(),
    errors: z.array(ActionError).optional(),
  })
  .strict()
  .describe(
    "Reports the real channel outcome of one outbound action, so the backend can reconcile state instead of assuming success on send.",
  );
export type ActionResultPayload = z.infer<typeof ActionResultPayload>;
