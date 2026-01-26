import { z } from "zod/v4";
export declare const DesignerPricing: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
    discountReason: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    pricePercentOff: z.ZodOptional<z.ZodNumber>;
    salePrice: z.ZodOptional<z.ZodNumber>;
    startingAtQty: z.ZodNumber;
}, z.core.$strip>>>;
export type DesignerPricing = z.infer<typeof DesignerPricing>;
//# sourceMappingURL=DesignerPricing.d.ts.map