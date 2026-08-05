import { z } from "zod";
const _ColorSpaceName = z
    .enum(["sRGB", "US_Web_Coated_SWOP_v2", "CIELAB"])
    .describe("Known color space names.");
/**Known color space names.*/
export const ColorSpaceName = _ColorSpaceName;
