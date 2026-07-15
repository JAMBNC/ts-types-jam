import { z } from "zod";
import { AcceptCancellationRequestMessage } from "./AcceptCancellationRequestMessage.js";
import { AcceptFulfillmentRequestMessage } from "./AcceptFulfillmentRequestMessage.js";
import { CloseFulfillmentOrderMessage } from "./CloseFulfillmentOrderMessage.js";
import { CreateFulfillmentMessage } from "./CreateFulfillmentMessage.js";
import { RejectCancellationRequestMessage } from "./RejectCancellationRequestMessage.js";
import { RejectFulfillmentRequestMessage } from "./RejectFulfillmentRequestMessage.js";
import { UpdateTrackingMessage } from "./UpdateTrackingMessage.js";

/**Discriminated union of all backend-to-mapper action messages.*/
export const FulfillmentOutboundMessage = z
  .union([
    AcceptFulfillmentRequestMessage,
    RejectFulfillmentRequestMessage,
    CreateFulfillmentMessage,
    UpdateTrackingMessage,
    AcceptCancellationRequestMessage,
    RejectCancellationRequestMessage,
    CloseFulfillmentOrderMessage,
  ])
  .describe("Discriminated union of all backend-to-mapper action messages.");
export type FulfillmentOutboundMessage = z.infer<
  typeof FulfillmentOutboundMessage
>;
