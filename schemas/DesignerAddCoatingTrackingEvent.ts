import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerAddCoatingTrackingEvent = z
  .object({
    event: z.literal("designer_add_coating"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerAddCoatingTrackingEventSchema =
  typeof _DesignerAddCoatingTrackingEvent;
export interface DesignerAddCoatingTrackingEventSchema extends _DesignerAddCoatingTrackingEventSchema {}
export const DesignerAddCoatingTrackingEvent: DesignerAddCoatingTrackingEventSchema =
  _DesignerAddCoatingTrackingEvent;
export type DesignerAddCoatingTrackingEvent = z.infer<
  typeof DesignerAddCoatingTrackingEvent
>;
