import { z } from "zod";
declare const _DesignerAddToCartTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_to_cart">;
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
        snapshots: z.ZodOptional<z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            label: z.ZodString;
        }, z.core.$strict>>>;
        designPreviewImage: z.ZodOptional<z.ZodString>;
        designReturnUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerAddToCartTrackingEventSchema = typeof _DesignerAddToCartTrackingEvent;
export interface DesignerAddToCartTrackingEventSchema extends _DesignerAddToCartTrackingEventSchema {
}
export declare const DesignerAddToCartTrackingEvent: DesignerAddToCartTrackingEventSchema;
export type DesignerAddToCartTrackingEvent = z.infer<typeof DesignerAddToCartTrackingEvent>;
export {};
//# sourceMappingURL=DesignerAddToCartTrackingEvent.d.ts.map