import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { IngredientMetadataType } from "./IngredientMetadataType.js";
import { MerchantCode } from "./MerchantCode.js";
export const DesignerChangeQuantityTrackingEvent = z
    .object({
    event: z.literal("designer_change_quantity"),
    payload: z
        .object({
        type: z.union([IngredientMetadataType, z.null()]).optional(),
        oldQuantity: z.number(),
        newQuantity: z.number(),
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
