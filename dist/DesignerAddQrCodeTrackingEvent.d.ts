import { z } from "zod";
declare const _DesignerAddQrCodeTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_qr_code">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerAddQrCodeTrackingEventSchema = typeof _DesignerAddQrCodeTrackingEvent;
export interface DesignerAddQrCodeTrackingEventSchema extends _DesignerAddQrCodeTrackingEventSchema {
}
export declare const DesignerAddQrCodeTrackingEvent: DesignerAddQrCodeTrackingEventSchema;
export type DesignerAddQrCodeTrackingEvent = z.infer<typeof DesignerAddQrCodeTrackingEvent>;
export {};
//# sourceMappingURL=DesignerAddQrCodeTrackingEvent.d.ts.map