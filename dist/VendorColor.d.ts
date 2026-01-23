import { z } from "zod/v4";
export declare const VendorColor: z.ZodObject<{
    colorId: z.ZodString;
    vendorName: z.ZodString;
    processes: z.ZodRecord<z.ZodString, z.ZodObject<{
        pricingGroup: z.ZodOptional<z.ZodString>;
        vendorColorName: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strict>;
export type VendorColor = z.infer<typeof VendorColor>;
//# sourceMappingURL=VendorColor.d.ts.map