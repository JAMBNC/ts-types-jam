import { z } from "zod";
export declare const VendorColor: z.ZodObject<{
    colorId: z.ZodString;
    processes: z.ZodRecord<z.ZodEnum<{
        offset: "offset";
        digital: "digital";
        foil: "foil";
        emboss: "emboss";
        screen: "screen";
        inkjet: "inkjet";
        flexography: "flexography";
        sublimation: "sublimation";
        thermal: "thermal";
    }>, z.ZodObject<{
        pricingGroup: z.ZodOptional<z.ZodString>;
        vendorColorName: z.ZodOptional<z.ZodString>;
    }, z.core.$loose>>;
    vendorName: z.ZodString;
}, z.core.$loose>;
export type VendorColor = z.infer<typeof VendorColor>;
//# sourceMappingURL=VendorColor.d.ts.map