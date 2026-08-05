import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerAddImageTrackingEvent = z
  .object({
    event: z.literal("designer_add_image"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerAddImageTrackingEventSchema =
  typeof _DesignerAddImageTrackingEvent;
export interface DesignerAddImageTrackingEventSchema extends _DesignerAddImageTrackingEventSchema {}
export const DesignerAddImageTrackingEvent: DesignerAddImageTrackingEventSchema =
  _DesignerAddImageTrackingEvent;
export type DesignerAddImageTrackingEvent = z.infer<
  typeof DesignerAddImageTrackingEvent
>;
