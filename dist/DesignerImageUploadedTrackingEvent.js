import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerImageUploadedTrackingEvent = z
    .object({
    event: z.literal("designer_image_uploaded"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerImageUploadedTrackingEvent = _DesignerImageUploadedTrackingEvent;
