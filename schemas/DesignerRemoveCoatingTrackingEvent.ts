import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerRemoveCoatingTrackingEvent = z
  .object({
    event: z.literal("designer_remove_coating"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerRemoveCoatingTrackingEventSchema =
  typeof _DesignerRemoveCoatingTrackingEvent;
export interface DesignerRemoveCoatingTrackingEventSchema extends _DesignerRemoveCoatingTrackingEventSchema {}
export const DesignerRemoveCoatingTrackingEvent: DesignerRemoveCoatingTrackingEventSchema =
  _DesignerRemoveCoatingTrackingEvent;
export type DesignerRemoveCoatingTrackingEvent = z.infer<
  typeof DesignerRemoveCoatingTrackingEvent
>;
