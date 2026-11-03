import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerAddQrCodeTrackingEvent = z
    .object({
    event: z.literal("designer_add_qr_code"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerAddQrCodeTrackingEvent = _DesignerAddQrCodeTrackingEvent;
