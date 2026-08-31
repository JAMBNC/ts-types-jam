import { z } from "zod";
declare const _DesignerRemoveFromCartTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_remove_from_cart">;
    payload: z.ZodObject<{
        productUrl: z.ZodOptional<z.ZodString>;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        merchant: z.ZodAny;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
        productSku: z.ZodString;
        quantity: z.ZodNumber;
        price: z.ZodNumber;
        adders: z.ZodArray<import("./AdderCodeEnum.js").AdderCodeEnumSchema>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerRemoveFromCartTrackingEventSchema = typeof _DesignerRemoveFromCartTrackingEvent;
export interface DesignerRemoveFromCartTrackingEventSchema extends _DesignerRemoveFromCartTrackingEventSchema {
}
export declare const DesignerRemoveFromCartTrackingEvent: DesignerRemoveFromCartTrackingEventSchema;
export type DesignerRemoveFromCartTrackingEvent = z.infer<typeof DesignerRemoveFromCartTrackingEvent>;
export {};
//# sourceMappingURL=DesignerRemoveFromCartTrackingEvent.d.ts.map