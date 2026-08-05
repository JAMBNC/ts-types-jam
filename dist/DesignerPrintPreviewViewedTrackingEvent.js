import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerPrintPreviewViewedTrackingEvent = z
    .object({
    event: z.literal("designer_print_preview_viewed"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerPrintPreviewViewedTrackingEvent = _DesignerPrintPreviewViewedTrackingEvent;
