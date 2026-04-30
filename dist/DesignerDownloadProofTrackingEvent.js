import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
export const DesignerDownloadProofTrackingEvent = z
    .object({
    event: z.literal("designer_download_proof"),
    payload: DefaultTrackingPayload,
})
    .strict();
