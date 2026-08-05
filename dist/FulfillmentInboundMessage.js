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
/**Discriminated union of all mapper-to-backend messages.*/
export const FulfillmentInboundMessage = _FulfillmentInboundMessage;
