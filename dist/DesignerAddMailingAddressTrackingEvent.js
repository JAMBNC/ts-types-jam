import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { MerchantCode } from "./MerchantCode.js";
export const DesignerAddMailingAddressTrackingEvent = z
    .object({
    event: z.literal("designer_add_mailing_address"),
    payload: z
        .object({
        type: z.enum(["single", "variable"]),
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
