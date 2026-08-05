import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerAddReturnAddressTrackingEvent = z
  .object({
    event: z.literal("designer_add_return_address"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerAddReturnAddressTrackingEventSchema =
  typeof _DesignerAddReturnAddressTrackingEvent;
export interface DesignerAddReturnAddressTrackingEventSchema extends _DesignerAddReturnAddressTrackingEventSchema {}
export const DesignerAddReturnAddressTrackingEvent: DesignerAddReturnAddressTrackingEventSchema =
  _DesignerAddReturnAddressTrackingEvent;
export type DesignerAddReturnAddressTrackingEvent = z.infer<
  typeof DesignerAddReturnAddressTrackingEvent
>;
