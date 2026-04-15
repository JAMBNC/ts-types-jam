import { z } from "zod";
export declare const DesignerAddMailingAddressTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_mailing_address">;
    payload: z.ZodObject<{
        type: z.ZodEnum<{
            single: "single";
            variable: "variable";
        }>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerAddMailingAddressTrackingEvent = z.infer<typeof DesignerAddMailingAddressTrackingEvent>;
//# sourceMappingURL=DesignerAddMailingAddressTrackingEvent.d.ts.map