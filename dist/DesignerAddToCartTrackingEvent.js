import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
const _DesignerAddToCartTrackingEvent = z
    .object({
    event: z.literal("designer_add_to_cart"),
    payload: z
        .object({
        productUrl: z.string().url().optional(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        merchant: z.any(),
        /**Time since the initial load in seconds*/
        deltaTime: DeltaTime,
        productSku: z.string(),
        quantity: z.number().int(),
        price: z.number(),
        adders: z.array(AdderCodeEnum),
    })
        .strict(),
})
    .strict();
export const DesignerAddToCartTrackingEvent = _DesignerAddToCartTrackingEvent;
