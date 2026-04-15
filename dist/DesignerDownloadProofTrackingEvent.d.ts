import { z } from "zod";
export declare const DesignerDownloadProofTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_download_proof">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerDownloadProofTrackingEvent = z.infer<typeof DesignerDownloadProofTrackingEvent>;
//# sourceMappingURL=DesignerDownloadProofTrackingEvent.d.ts.map