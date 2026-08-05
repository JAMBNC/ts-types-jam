import { z } from "zod";
declare const _Vendor: z.ZodEnum<{
    ADMORE: "ADMORE";
    DUPLI: "DUPLI";
    GRAPHIC_AWARDS: "GRAPHIC_AWARDS";
    JARED: "JARED";
    TAYLOR_FOLDERWORKS: "TAYLOR_FOLDERWORKS";
    TAYLOR_LABELWORKS: "TAYLOR_LABELWORKS";
    TAYLOR_NAVITOR: "TAYLOR_NAVITOR";
    TAYLOR_SIGNS: "TAYLOR_SIGNS";
    TRAFFICWORKS: "TRAFFICWORKS";
}>;
type _VendorSchema = typeof _Vendor;
export interface VendorSchema extends _VendorSchema {
}
export declare const Vendor: VendorSchema;
export type Vendor = z.infer<typeof Vendor>;
export {};
//# sourceMappingURL=Vendor.d.ts.map