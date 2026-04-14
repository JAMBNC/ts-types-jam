import { z } from "zod";
export const TrackingEvent_designer_add_image = z
    .object({
    event: z.literal("designer_add_image"),
    payload: z.record(z.string(), z.never()),
})
    .strict();
