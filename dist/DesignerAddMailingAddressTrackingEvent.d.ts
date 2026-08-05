import { z } from "zod";
declare const _DesignerAddMailingAddressTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_mailing_address">;
    payload: z.ZodObject<{
        type: z.ZodEnum<{
            single: "single";
            variable: "variable";
        }>;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        merchant: import("./MerchantCode.js").MerchantCodeSchema;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerAddMailingAddressTrackingEventSchema = typeof _DesignerAddMailingAddressTrackingEvent;
export interface DesignerAddMailingAddressTrackingEventSchema extends _DesignerAddMailingAddressTrackingEventSchema {
}
export declare const DesignerAddMailingAddressTrackingEvent: DesignerAddMailingAddressTrackingEventSchema;
export type DesignerAddMailingAddressTrackingEvent = z.infer<typeof DesignerAddMailingAddressTrackingEvent>;
export {};
//# sourceMappingURL=DesignerAddMailingAddressTrackingEvent.d.ts.map