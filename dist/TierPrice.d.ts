import { z } from "zod";
declare const _TierPrice: z.ZodObject<{
    discountReason: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    pricePercentOff: z.ZodOptional<z.ZodNumber>;
    salePrice: z.ZodOptional<z.ZodNumber>;
    startingAtQty: z.ZodNumber;
}, z.core.$loose>;
type _TierPriceSchema = typeof _TierPrice;
export interface TierPriceSchema extends _TierPriceSchema {
}
export declare const TierPrice: TierPriceSchema;
export type TierPrice = z.infer<typeof TierPrice>;
export {};
//# sourceMappingURL=TierPrice.d.ts.map