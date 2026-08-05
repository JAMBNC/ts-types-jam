import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerPriceSummaryViewedTrackingEvent = z
  .object({
    event: z.literal("designer_price_summary_viewed"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerPriceSummaryViewedTrackingEventSchema =
  typeof _DesignerPriceSummaryViewedTrackingEvent;
export interface DesignerPriceSummaryViewedTrackingEventSchema extends _DesignerPriceSummaryViewedTrackingEventSchema {}
export const DesignerPriceSummaryViewedTrackingEvent: DesignerPriceSummaryViewedTrackingEventSchema =
  _DesignerPriceSummaryViewedTrackingEvent;
export type DesignerPriceSummaryViewedTrackingEvent = z.infer<
  typeof DesignerPriceSummaryViewedTrackingEvent
>;
