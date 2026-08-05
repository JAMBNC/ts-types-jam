import { z } from "zod";
declare const _DesignerCartTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_cart">;
    payload: z.ZodObject<{
        productUrl: z.ZodOptional<z.ZodString>;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        merchant: import("./MerchantCode.js").MerchantCodeSchema;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
        productSku: z.ZodString;
        quantity: z.ZodNumber;
        price: z.ZodNumber;
        adders: z.ZodArray<import("./AdderCodeEnum.js").AdderCodeEnumSchema>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerCartTrackingEventSchema = typeof _DesignerCartTrackingEvent;
export interface DesignerCartTrackingEventSchema extends _DesignerCartTrackingEventSchema {
}
export declare const DesignerCartTrackingEvent: DesignerCartTrackingEventSchema;
export type DesignerCartTrackingEvent = z.infer<typeof DesignerCartTrackingEvent>;
export {};
//# sourceMappingURL=DesignerCartTrackingEvent.d.ts.map