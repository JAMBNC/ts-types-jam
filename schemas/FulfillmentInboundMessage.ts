import { z } from "zod";
import { ActionResultMessage } from "./ActionResultMessage.js";
import { CancellationRequestMessage } from "./CancellationRequestMessage.js";
import { FulfillmentRequestMessage } from "./FulfillmentRequestMessage.js";

const _FulfillmentInboundMessage = z
  .union([
    FulfillmentRequestMessage,
    CancellationRequestMessage,
    ActionResultMessage,
  ])
  .describe("Discriminated union of all mapper-to-backend messages.");
type _FulfillmentInboundMessageSchema = typeof _FulfillmentInboundMessage;
export interface FulfillmentInboundMessageSchema extends _FulfillmentInboundMessageSchema {}
/**Discriminated union of all mapper-to-backend messages.*/
export const FulfillmentInboundMessage: FulfillmentInboundMessageSchema =
  _FulfillmentInboundMessage;
export type FulfillmentInboundMessage = z.infer<
  typeof FulfillmentInboundMessage
>;
