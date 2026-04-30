import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
export const DesignerPrintPreviewViewedTrackingEvent = z
    .object({
    event: z.literal("designer_print_preview_viewed"),
    payload: DefaultTrackingPayload,
})
    .strict();
