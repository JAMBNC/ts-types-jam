import { z } from "zod";
export declare const TierPrice: z.ZodObject<{
    discountReason: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    pricePercentOff: z.ZodOptional<z.ZodNumber>;
    salePrice: z.ZodOptional<z.ZodNumber>;
    startingAtQty: z.ZodNumber;
}, z.core.$loose>;
export type TierPrice = z.infer<typeof TierPrice>;
//# sourceMappingURL=TierPrice.d.ts.map