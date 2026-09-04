import { z } from "zod";
declare const _DesignerUpdateInCartTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_update_in_cart">;
    payload: z.ZodObject<{
        productUrl: z.ZodOptional<z.ZodString>;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        partner: z.ZodString;
        channel: z.ZodString;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
        productSku: z.ZodString;
        quantity: z.ZodNumber;
        price: z.ZodNumber;
        adders: z.ZodArray<import("./AdderCodeEnum.js").AdderCodeEnumSchema>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerUpdateInCartTrackingEventSchema = typeof _DesignerUpdateInCartTrackingEvent;
export interface DesignerUpdateInCartTrackingEventSchema extends _DesignerUpdateInCartTrackingEventSchema {
}
export declare const DesignerUpdateInCartTrackingEvent: DesignerUpdateInCartTrackingEventSchema;
export type DesignerUpdateInCartTrackingEvent = z.infer<typeof DesignerUpdateInCartTrackingEvent>;
export {};
//# sourceMappingURL=DesignerUpdateInCartTrackingEvent.d.ts.map