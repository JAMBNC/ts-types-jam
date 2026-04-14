import { z } from "zod";
export declare const TrackingEvent_designer_add_mailing_address: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_mailing_address">;
    payload: z.ZodObject<{
        type: z.ZodEnum<{
            single: "single";
            variable: "variable";
        }>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TrackingEvent_designer_add_mailing_address = z.infer<typeof TrackingEvent_designer_add_mailing_address>;
//# sourceMappingURL=TrackingEvent_designer_add_mailing_address.d.ts.map