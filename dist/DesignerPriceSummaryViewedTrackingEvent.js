import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerPriceSummaryViewedTrackingEvent = z
    .object({
    event: z.literal("designer_price_summary_viewed"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerPriceSummaryViewedTrackingEvent = _DesignerPriceSummaryViewedTrackingEvent;
