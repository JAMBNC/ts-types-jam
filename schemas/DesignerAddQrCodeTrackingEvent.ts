import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerAddQrCodeTrackingEvent = z
  .object({
    event: z.literal("designer_add_qr_code"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerAddQrCodeTrackingEventSchema =
  typeof _DesignerAddQrCodeTrackingEvent;
export interface DesignerAddQrCodeTrackingEventSchema extends _DesignerAddQrCodeTrackingEventSchema {}
export const DesignerAddQrCodeTrackingEvent: DesignerAddQrCodeTrackingEventSchema =
  _DesignerAddQrCodeTrackingEvent;
export type DesignerAddQrCodeTrackingEvent = z.infer<
  typeof DesignerAddQrCodeTrackingEvent
>;
