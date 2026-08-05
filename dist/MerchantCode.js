import { z } from "zod";
const _MerchantCode = z
    .string()
    .describe("An analytics/tracking code to help id the merchant for the event.");
/**An analytics/tracking code to help id the merchant for the event.*/
export const MerchantCode = _MerchantCode;
