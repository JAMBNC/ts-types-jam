import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { MerchantCode } from "./MerchantCode.js";
export const DesignerDesignSavedTrackingEvent = z
    .object({
    event: z.literal("designer_design_saved"),
    payload: z
        .object({
        designId: z.string(),
        snapshots: z.array(z.object({ url: z.string().url(), label: z.string() }).strict()),
        designReturnUrl: z.string().url(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        /**An analytics/tracking code to help id the merchant for the event.*/
        merchant: MerchantCode,
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
    })
        .strict(),
})
    .strict();
