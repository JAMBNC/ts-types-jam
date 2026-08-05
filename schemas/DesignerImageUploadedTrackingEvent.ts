import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerImageUploadedTrackingEvent = z
  .object({
    event: z.literal("designer_image_uploaded"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerImageUploadedTrackingEventSchema =
  typeof _DesignerImageUploadedTrackingEvent;
export interface DesignerImageUploadedTrackingEventSchema extends _DesignerImageUploadedTrackingEventSchema {}
export const DesignerImageUploadedTrackingEvent: DesignerImageUploadedTrackingEventSchema =
  _DesignerImageUploadedTrackingEvent;
export type DesignerImageUploadedTrackingEvent = z.infer<
  typeof DesignerImageUploadedTrackingEvent
>;
