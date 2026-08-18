import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { DeltaTime } from "./DeltaTime.js";
import { DesignerCode } from "./DesignerCode.js";
import { MerchantCode } from "./MerchantCode.js";

const _DesignerUpdateInCartTrackingEvent = z
  .object({
    event: z.literal("designer_update_in_cart"),
    payload: z
      .object({
        productUrl: z.string().url().optional(),
        /**An analytics/tracking code to help id the designer event source.*/
        designer: DesignerCode,
        /**An analytics/tracking code to help id the merchant for the event.*/
        merchant: MerchantCode,
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
type _DesignerUpdateInCartTrackingEventSchema =
  typeof _DesignerUpdateInCartTrackingEvent;
export interface DesignerUpdateInCartTrackingEventSchema extends _DesignerUpdateInCartTrackingEventSchema {}
export const DesignerUpdateInCartTrackingEvent: DesignerUpdateInCartTrackingEventSchema =
  _DesignerUpdateInCartTrackingEvent;
export type DesignerUpdateInCartTrackingEvent = z.infer<
  typeof DesignerUpdateInCartTrackingEvent
>;
