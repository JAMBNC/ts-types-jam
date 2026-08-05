import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerDownloadProofTrackingEvent = z
    .object({
    event: z.literal("designer_download_proof"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerDownloadProofTrackingEvent = _DesignerDownloadProofTrackingEvent;
