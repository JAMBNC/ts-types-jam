import { z } from "zod";
export const DesignerImageUploadedTrackingEvent = z
    .object({
    event: z.literal("designer_image_uploaded"),
    payload: z.record(z.string(), z.never()),
})
    .strict();
