import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { MerchantCode } from "./MerchantCode.js";

export const DesignerMiscInteractionTrackingEvent = z
  .object({
    event: z.literal("designer_misc_interaction"),
    payload: z
      .object({
        name: z.string(),
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
export type DesignerMiscInteractionTrackingEvent = z.infer<
  typeof DesignerMiscInteractionTrackingEvent
>;
