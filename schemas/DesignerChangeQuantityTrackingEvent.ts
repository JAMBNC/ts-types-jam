import { z } from "zod";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { IngredientMetadataType } from "./IngredientMetadataType.js";
import { MerchantCode } from "./MerchantCode.js";

const _DesignerChangeQuantityTrackingEvent = z
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
type _DesignerChangeQuantityTrackingEventSchema =
  typeof _DesignerChangeQuantityTrackingEvent;
export interface DesignerChangeQuantityTrackingEventSchema extends _DesignerChangeQuantityTrackingEventSchema {}
export const DesignerChangeQuantityTrackingEvent: DesignerChangeQuantityTrackingEventSchema =
  _DesignerChangeQuantityTrackingEvent;
export type DesignerChangeQuantityTrackingEvent = z.infer<
  typeof DesignerChangeQuantityTrackingEvent
>;
