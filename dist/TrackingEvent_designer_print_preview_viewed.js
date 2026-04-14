import { z } from "zod";
export const TrackingEvent_designer_print_preview_viewed = z
    .object({
    event: z.literal("designer_print_preview_viewed"),
    payload: z.record(z.string(), z.never()),
})
    .strict();
