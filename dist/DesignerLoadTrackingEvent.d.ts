import { z } from "zod";
declare const _DesignerLoadTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_load">;
    payload: z.ZodObject<{
        loadTime: z.ZodNumber;
        productUrl: z.ZodOptional<z.ZodString>;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        merchant: import("./MerchantCode.js").MerchantCodeSchema;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerLoadTrackingEventSchema = typeof _DesignerLoadTrackingEvent;
export interface DesignerLoadTrackingEventSchema extends _DesignerLoadTrackingEventSchema {
}
export declare const DesignerLoadTrackingEvent: DesignerLoadTrackingEventSchema;
export type DesignerLoadTrackingEvent = z.infer<typeof DesignerLoadTrackingEvent>;
export {};
//# sourceMappingURL=DesignerLoadTrackingEvent.d.ts.map