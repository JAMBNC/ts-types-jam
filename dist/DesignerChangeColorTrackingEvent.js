import { z } from "zod";
import { Color } from "./Color.js";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { IngredientMetadataType } from "./IngredientMetadataType.js";
import { MerchantCode } from "./MerchantCode.js";
export const DesignerChangeColorTrackingEvent = z
    .object({
    event: z.literal("designer_change_color"),
    payload: z
        .object({
        type: z.union([IngredientMetadataType, z.null()]).optional(),
        oldColors: z.array(Color),
        newColors: z.array(Color),
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
