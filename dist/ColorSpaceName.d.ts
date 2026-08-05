import { z } from "zod";
declare const _ColorSpaceName: z.ZodEnum<{
    CIELAB: "CIELAB";
    US_Web_Coated_SWOP_v2: "US_Web_Coated_SWOP_v2";
    sRGB: "sRGB";
}>;
type _ColorSpaceNameSchema = typeof _ColorSpaceName;
export interface ColorSpaceNameSchema extends _ColorSpaceNameSchema {
}
/**Known color space names.*/
export declare const ColorSpaceName: ColorSpaceNameSchema;
export type ColorSpaceName = z.infer<typeof ColorSpaceName>;
export {};
//# sourceMappingURL=ColorSpaceName.d.ts.map