import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { WorkspaceTag } from "./WorkspaceTag.js";
const _DesignerAddMailingAddressTrackingEvent = z
    .object({
    event: z.literal("designer_add_mailing_address"),
    payload: z
        .object({
        type: z.enum(["single", "variable"]),
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
export const DesignerAddMailingAddressTrackingEvent = _DesignerAddMailingAddressTrackingEvent;
