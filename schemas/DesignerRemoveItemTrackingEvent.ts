import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { MerchantCode } from "./MerchantCode.js";

export const DesignerRemoveItemTrackingEvent = z
  .object({
    event: z.literal("designer_remove_item"),
    payload: z
      .object({
        type: z
          .union([
            z
              .enum([
                "sRecipientAddress",
                "recipientAddress",
                "returnAddress",
                "image",
                "text",
                "variableData",
              ])
              .describe("The type of ingredient in the designer."),
            z.null(),
          ])
          .optional(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        /**An analytics/tracking code to help id the merchant for the event.*/
        merchant: MerchantCode,
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
      })
      .strict(),
  })
  .strict();
export type DesignerRemoveItemTrackingEvent = z.infer<
  typeof DesignerRemoveItemTrackingEvent
>;
