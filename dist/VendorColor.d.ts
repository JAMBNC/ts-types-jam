import { z } from "zod";
export declare const VendorColor: z.ZodObject<{
    colorId: z.ZodString;
    processes: z.ZodRecord<z.core.$ZodRecordKey, z.core.SomeType>;
    vendorName: z.ZodString;
}, z.core.$loose>;
export type VendorColor = z.infer<typeof VendorColor>;
//# sourceMappingURL=VendorColor.d.ts.map