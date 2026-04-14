import { z } from "zod";
export const TrackingEvent_designer_image_uploaded = z
    .object({
    event: z.literal("designer_image_uploaded"),
    payload: z.record(z.string(), z.never()),
})
    .strict();
