import { z } from "zod";
export declare const VendorProcess: z.ZodObject<{
    apiColorName: z.ZodOptional<z.ZodString>;
    colorName: z.ZodOptional<z.ZodString>;
    pricingGroup: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type VendorProcess = z.infer<typeof VendorProcess>;
//# sourceMappingURL=VendorProcess.d.ts.map