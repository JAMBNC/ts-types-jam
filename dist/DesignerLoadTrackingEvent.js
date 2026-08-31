import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
const _DesignerLoadTrackingEvent = z
    .object({
    event: z.literal("designer_load"),
    payload: z
        .object({
        loadTime: z.number(),
        productUrl: z.string().url().optional(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        merchant: z.any(),
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
    })
        .strict(),
})
    .strict();
export const DesignerLoadTrackingEvent = _DesignerLoadTrackingEvent;
