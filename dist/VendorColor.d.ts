import { z } from "zod/v4";
export declare const VendorColor: z.ZodObject<{
    vendorName: z.ZodString;
    colorId: z.ZodString;
    supportedProcesses: z.ZodArray<z.ZodEnum<{
        offset: "offset";
        digital: "digital";
        foil: "foil";
        emboss: "emboss";
        screen: "screen";
        inkjet: "inkjet";
        flexography: "flexography";
        sublimation: "sublimation";
        thermal: "thermal";
    }>>;
    pricing: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strict>;
export type VendorColor = z.infer<typeof VendorColor>;
//# sourceMappingURL=VendorColor.d.ts.map