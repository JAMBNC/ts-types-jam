import { z } from "zod";
/**Known color space names.*/
export declare const ColorSpaceName: z.ZodEnum<{
    CIELAB: "CIELAB";
    US_Web_Coated_SWOP_v2: "US_Web_Coated_SWOP_v2";
    sRGB: "sRGB";
}>;
export type ColorSpaceName = z.infer<typeof ColorSpaceName>;
//# sourceMappingURL=ColorSpaceName.d.ts.map