import { z } from "zod";
export declare const VendorColor: z.ZodObject<{
    colorId: z.ZodString;
    vendorName: z.ZodString;
    vendorColorName: z.ZodOptional<z.ZodString>;
    processes: z.ZodRecord<z.core.$ZodRecordKey, z.core.SomeType>;
}, z.core.$strict>;
export type VendorColor = z.infer<typeof VendorColor>;
//# sourceMappingURL=VendorColor.d.ts.map