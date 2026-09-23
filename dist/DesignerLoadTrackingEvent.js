import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { WorkspaceTag } from "./WorkspaceTag.js";
const _DesignerLoadTrackingEvent = z
    .object({
    event: z.literal("designer_load"),
    payload: z
        .object({
        loadTime: z.number(),
        productUrl: z.string().url().optional(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        /**Partner Code*/
        partner: z.string().describe("Partner Code"),
        /**Channel Code*/
        channel: z.string().describe("Channel Code"),
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
        /**The workspace tags when this event fired*/
        workspaceSessionTags: z
            .array(z.array(WorkspaceTag))
            .describe("The workspace tags when this event fired"),
    })
        .strict(),
})
    .strict();
export const DesignerLoadTrackingEvent = _DesignerLoadTrackingEvent;
