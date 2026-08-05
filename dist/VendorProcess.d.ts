import { z } from "zod";
declare const _VendorProcess: z.ZodObject<{
    apiColorName: z.ZodOptional<z.ZodString>;
    colorName: z.ZodOptional<z.ZodString>;
    pricingGroup: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _VendorProcessSchema = typeof _VendorProcess;
export interface VendorProcessSchema extends _VendorProcessSchema {
}
export declare const VendorProcess: VendorProcessSchema;
export type VendorProcess = z.infer<typeof VendorProcess>;
export {};
//# sourceMappingURL=VendorProcess.d.ts.map