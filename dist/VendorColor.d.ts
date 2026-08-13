import { z } from "zod";
declare const _VendorColor: z.ZodObject<{
    colorId: z.ZodString;
    colorName: z.ZodOptional<z.ZodString>;
    processes: z.ZodObject<{
        offset: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        digital: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        foil: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        emboss: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        screen: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        inkjet: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        flexography: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        sublimation: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        thermal: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        whiteInk: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        engraving: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
        letterpress: z.ZodOptional<import("./VendorProcess.js").VendorProcessSchema>;
    }, z.core.$strip>;
    vendor: import("./Vendor.js").VendorSchema;
}, z.core.$loose>;
type _VendorColorSchema = typeof _VendorColor;
export interface VendorColorSchema extends _VendorColorSchema {
}
export declare const VendorColor: VendorColorSchema;
export type VendorColor = z.infer<typeof VendorColor>;
export {};
//# sourceMappingURL=VendorColor.d.ts.map