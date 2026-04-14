import { z } from "zod";
export const TrackingEvent_designer_load = z
    .object({
    event: z.literal("designer_load"),
    payload: z
        .object({ loadTime: z.number(), designer: z.enum(["base", "hermes"]) })
        .strict(),
})
    .strict();
