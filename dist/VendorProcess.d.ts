import { z } from "zod";
export declare const VendorProcess: z.ZodObject<{
    pricingGroup: z.ZodOptional<z.ZodString>;
    vendorColorName: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type VendorProcess = z.infer<typeof VendorProcess>;
//# sourceMappingURL=VendorProcess.d.ts.map