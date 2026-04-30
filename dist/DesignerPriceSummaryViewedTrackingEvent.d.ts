import { z } from "zod";
export declare const DesignerPriceSummaryViewedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_price_summary_viewed">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerPriceSummaryViewedTrackingEvent = z.infer<typeof DesignerPriceSummaryViewedTrackingEvent>;
//# sourceMappingURL=DesignerPriceSummaryViewedTrackingEvent.d.ts.map