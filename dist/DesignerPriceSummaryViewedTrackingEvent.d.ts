import { z } from "zod";
declare const _DesignerPriceSummaryViewedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_price_summary_viewed">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerPriceSummaryViewedTrackingEventSchema = typeof _DesignerPriceSummaryViewedTrackingEvent;
export interface DesignerPriceSummaryViewedTrackingEventSchema extends _DesignerPriceSummaryViewedTrackingEventSchema {
}
export declare const DesignerPriceSummaryViewedTrackingEvent: DesignerPriceSummaryViewedTrackingEventSchema;
export type DesignerPriceSummaryViewedTrackingEvent = z.infer<typeof DesignerPriceSummaryViewedTrackingEvent>;
export {};
//# sourceMappingURL=DesignerPriceSummaryViewedTrackingEvent.d.ts.map