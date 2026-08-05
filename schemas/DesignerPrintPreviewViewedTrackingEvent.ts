import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerPrintPreviewViewedTrackingEvent = z
  .object({
    event: z.literal("designer_print_preview_viewed"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerPrintPreviewViewedTrackingEventSchema =
  typeof _DesignerPrintPreviewViewedTrackingEvent;
export interface DesignerPrintPreviewViewedTrackingEventSchema extends _DesignerPrintPreviewViewedTrackingEventSchema {}
export const DesignerPrintPreviewViewedTrackingEvent: DesignerPrintPreviewViewedTrackingEventSchema =
  _DesignerPrintPreviewViewedTrackingEvent;
export type DesignerPrintPreviewViewedTrackingEvent = z.infer<
  typeof DesignerPrintPreviewViewedTrackingEvent
>;
