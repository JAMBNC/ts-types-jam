import { z } from "zod";
export const TrackingEvent_designer_design_started = z
    .object({
    event: z.literal("designer_design_started"),
    payload: z.record(z.string(), z.never()),
})
    .strict();
