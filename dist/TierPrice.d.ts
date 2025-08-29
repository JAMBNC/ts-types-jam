import { z } from "zod/v4";
export declare const TierPrice: z.ZodObject<{
    discountReason: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    pricePercentOff: z.ZodOptional<z.ZodNumber>;
    salePrice: z.ZodOptional<z.ZodNumber>;
    startingAtQty: z.ZodNumber;
}, z.core.$strip>;
export type TierPrice = z.infer<typeof TierPrice>;
//# sourceMappingURL=TierPrice.d.ts.map