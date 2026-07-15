import { z } from "zod";
import { ActionResultMessage } from "./ActionResultMessage.js";
import { CancellationRequestMessage } from "./CancellationRequestMessage.js";
import { FulfillmentRequestMessage } from "./FulfillmentRequestMessage.js";

/**Discriminated union of all mapper-to-backend messages.*/
export const FulfillmentInboundMessage = z
  .union([
    FulfillmentRequestMessage,
    CancellationRequestMessage,
    ActionResultMessage,
  ])
  .describe("Discriminated union of all mapper-to-backend messages.");
export type FulfillmentInboundMessage = z.infer<
  typeof FulfillmentInboundMessage
>;
