import { z } from "zod";
export const TrackingEvent_designer_image_removed_from_gallery = z
    .object({
    event: z.literal("designer_image_removed_from_gallery"),
    payload: z.record(z.string(), z.never()),
})
    .strict();
