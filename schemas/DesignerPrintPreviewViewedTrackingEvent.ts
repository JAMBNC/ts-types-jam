import { z } from "zod";

export const DesignerPrintPreviewViewedTrackingEvent = z
  .object({
    event: z.literal("designer_print_preview_viewed"),
    payload: z.record(z.string(), z.never()),
  })
  .strict();
export type DesignerPrintPreviewViewedTrackingEvent = z.infer<
  typeof DesignerPrintPreviewViewedTrackingEvent
>;
