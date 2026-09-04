import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
const _DesignerReviewDesignTrackingEvent = z
    .object({
    event: z.literal("designer_review_design"),
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
        snapshots: z
            .array(z.object({ url: z.string().url(), label: z.string() }).strict())
            .optional(),
        /**Primary image used for previewing the design in cards or lists.*/
        designPreviewImage: z
            .string()
            .url()
            .describe("Primary image used for previewing the design in cards or lists.")
            .optional(),
        designReturnUrl: z.string().url().optional(),
    })
        .strict(),
})
    .strict();
export const DesignerReviewDesignTrackingEvent = _DesignerReviewDesignTrackingEvent;
