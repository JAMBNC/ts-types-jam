import { z } from "zod";
export declare const DesignerDownloadProofTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_download_proof">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerDownloadProofTrackingEvent = z.infer<typeof DesignerDownloadProofTrackingEvent>;
//# sourceMappingURL=DesignerDownloadProofTrackingEvent.d.ts.map