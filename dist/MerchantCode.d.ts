import { z } from "zod";
declare const _MerchantCode: z.ZodString;
type _MerchantCodeSchema = typeof _MerchantCode;
export interface MerchantCodeSchema extends _MerchantCodeSchema {
}
/**An analytics/tracking code to help id the merchant for the event.*/
export declare const MerchantCode: MerchantCodeSchema;
export type MerchantCode = z.infer<typeof MerchantCode>;
export {};
//# sourceMappingURL=MerchantCode.d.ts.map