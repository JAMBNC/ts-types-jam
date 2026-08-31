import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
const _DesignerToolInteractionTrackingEvent = z
    .object({
    event: z.literal("designer_tool_interaction"),
    payload: z
        .object({
        tool: z.string(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        merchant: z.any(),
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
    })
        .strict(),
})
    .strict();
export const DesignerToolInteractionTrackingEvent = _DesignerToolInteractionTrackingEvent;
