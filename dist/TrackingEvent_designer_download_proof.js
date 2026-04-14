import { z } from "zod";
export const TrackingEvent_designer_download_proof = z
    .object({
    event: z.literal("designer_download_proof"),
    payload: z.record(z.string(), z.never()),
})
    .strict();
