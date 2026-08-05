import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerAddTextTrackingEvent = z
  .object({
    event: z.literal("designer_add_text"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerAddTextTrackingEventSchema = typeof _DesignerAddTextTrackingEvent;
export interface DesignerAddTextTrackingEventSchema extends _DesignerAddTextTrackingEventSchema {}
export const DesignerAddTextTrackingEvent: DesignerAddTextTrackingEventSchema =
  _DesignerAddTextTrackingEvent;
export type DesignerAddTextTrackingEvent = z.infer<
  typeof DesignerAddTextTrackingEvent
>;
