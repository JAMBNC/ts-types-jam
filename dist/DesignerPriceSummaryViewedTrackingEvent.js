import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
export const DesignerPriceSummaryViewedTrackingEvent = z
    .object({
    event: z.literal("designer_price_summary_viewed"),
    payload: DefaultTrackingPayload,
})
    .strict();
