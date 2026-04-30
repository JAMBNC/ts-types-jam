import { z } from "zod";

/**An analytics/tracking code to help id the merchant for the event.*/
export const MerchantCode = z
  .string()
  .describe(
    "An analytics/tracking code to help id the merchant for the event.",
  );
export type MerchantCode = z.infer<typeof MerchantCode>;
