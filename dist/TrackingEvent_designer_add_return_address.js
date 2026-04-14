import { z } from "zod";
export const TrackingEvent_designer_add_return_address = z
    .object({
    event: z.literal("designer_add_return_address"),
    payload: z.record(z.string(), z.never()),
})
    .strict();
