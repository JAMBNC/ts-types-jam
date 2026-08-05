import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerDownloadProofTrackingEvent = z
  .object({
    event: z.literal("designer_download_proof"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerDownloadProofTrackingEventSchema =
  typeof _DesignerDownloadProofTrackingEvent;
export interface DesignerDownloadProofTrackingEventSchema extends _DesignerDownloadProofTrackingEventSchema {}
export const DesignerDownloadProofTrackingEvent: DesignerDownloadProofTrackingEventSchema =
  _DesignerDownloadProofTrackingEvent;
export type DesignerDownloadProofTrackingEvent = z.infer<
  typeof DesignerDownloadProofTrackingEvent
>;
