import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";

const _DesignerAddMailingAddressTrackingEvent = z
  .object({
    event: z.literal("designer_add_mailing_address"),
    payload: z
      .object({
        type: z.enum(["single", "variable"]),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        merchant: z.any(),
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
      })
      .strict(),
  })
  .strict();
type _DesignerAddMailingAddressTrackingEventSchema =
  typeof _DesignerAddMailingAddressTrackingEvent;
export interface DesignerAddMailingAddressTrackingEventSchema extends _DesignerAddMailingAddressTrackingEventSchema {}
export const DesignerAddMailingAddressTrackingEvent: DesignerAddMailingAddressTrackingEventSchema =
  _DesignerAddMailingAddressTrackingEvent;
export type DesignerAddMailingAddressTrackingEvent = z.infer<
  typeof DesignerAddMailingAddressTrackingEvent
>;
