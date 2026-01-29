import { z } from "zod";
export declare const ColorSpaceName: z.ZodEnum<{
    sRGB: "sRGB";
    "Adobe RGB": "Adobe RGB";
    "Display P3": "Display P3";
    "ProPhoto RGB": "ProPhoto RGB";
    "US Web Coated SWOP v2": "US Web Coated SWOP v2";
    "Coated FOGRA39": "Coated FOGRA39";
    "Japan Color 2001 Coated": "Japan Color 2001 Coated";
    PMS: "PMS";
    CIELAB: "CIELAB";
}>;
export type ColorSpaceName = z.infer<typeof ColorSpaceName>;
//# sourceMappingURL=ColorSpaceName.d.ts.map