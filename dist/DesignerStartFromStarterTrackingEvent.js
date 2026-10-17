import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { WorkspaceTag } from "./WorkspaceTag.js";
const _DesignerStartFromStarterTrackingEvent = z
    .object({
    event: z.literal("designer_start_from_starter"),
    payload: z
        .object({
        /**The starter the shopper started from.*/
        starterId: z
            .number()
            .int()
            .describe("The starter the shopper started from."),
        /**The product the starter was loaded onto.*/
        sku: z.string().describe("The product the starter was loaded onto."),
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
            .array(WorkspaceTag)
            .describe("The workspace tags when this event fired"),
    })
        .strict(),
})
    .strict();
export const DesignerStartFromStarterTrackingEvent = _DesignerStartFromStarterTrackingEvent;
