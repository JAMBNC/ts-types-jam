import { z } from "zod";
export const DesignerDownloadProofTrackingEvent = z
    .object({ event: z.literal("designer_download_proof"), payload: z.any() })
    .strict();
