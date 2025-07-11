import { z } from "zod";
export declare const TierPrice: z.ZodObject<{
    price: z.ZodNumber;
    startingAtQty: z.ZodNumber;
}, z.core.$strip>;
export type TierPrice = z.infer<typeof TierPrice>;
//# sourceMappingURL=TierPrice.d.ts.map