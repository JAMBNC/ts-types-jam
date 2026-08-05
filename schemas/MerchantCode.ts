import { z } from "zod";

const _MerchantCode = z
  .string()
  .describe(
    "An analytics/tracking code to help id the merchant for the event.",
  );
type _MerchantCodeSchema = typeof _MerchantCode;
export interface MerchantCodeSchema extends _MerchantCodeSchema {}
/**An analytics/tracking code to help id the merchant for the event.*/
export const MerchantCode: MerchantCodeSchema = _MerchantCode;
export type MerchantCode = z.infer<typeof MerchantCode>;
