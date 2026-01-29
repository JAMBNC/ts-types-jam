import { z } from "zod";
/**Known color space names.*/
export declare const ColorSpaceName: z.ZodEnum<{
    sRGB: "sRGB";
    US_Web_Coated_SWOP_v2: "US_Web_Coated_SWOP_v2";
}>;
export type ColorSpaceName = z.infer<typeof ColorSpaceName>;
//# sourceMappingURL=ColorSpaceName.d.ts.map