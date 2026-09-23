import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { WorkspaceTag } from "./WorkspaceTag.js";
const _DesignerRemoveFromCartTrackingEvent = z
    .object({
    event: z.literal("designer_remove_from_cart"),
    payload: z
        .object({
        productUrl: z.string().url().optional(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        /**Partner Code*/
        partner: z.string().describe("Partner Code"),
        /**Channel Code*/
        channel: z.string().describe("Channel Code"),
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
        productSku: z.string(),
        quantity: z.number().int(),
        price: z.number(),
        adders: z.array(AdderCodeEnum),
        /**The workspace tags when this event fired*/
        workspaceSessionTags: z
            .array(z.array(WorkspaceTag))
            .describe("The workspace tags when this event fired"),
    })
        .strict(),
})
    .strict();
export const DesignerRemoveFromCartTrackingEvent = _DesignerRemoveFromCartTrackingEvent;
