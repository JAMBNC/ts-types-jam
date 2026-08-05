import { z } from "zod";
declare const _DesignerDownloadProofTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_download_proof">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerDownloadProofTrackingEventSchema = typeof _DesignerDownloadProofTrackingEvent;
export interface DesignerDownloadProofTrackingEventSchema extends _DesignerDownloadProofTrackingEventSchema {
}
export declare const DesignerDownloadProofTrackingEvent: DesignerDownloadProofTrackingEventSchema;
export type DesignerDownloadProofTrackingEvent = z.infer<typeof DesignerDownloadProofTrackingEvent>;
export {};
//# sourceMappingURL=DesignerDownloadProofTrackingEvent.d.ts.map