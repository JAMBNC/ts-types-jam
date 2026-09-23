import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { WorkspaceTag } from "./WorkspaceTag.js";
const _DefaultTrackingPayload = z
    .object({
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
    .strict();
export const DefaultTrackingPayload = _DefaultTrackingPayload;
