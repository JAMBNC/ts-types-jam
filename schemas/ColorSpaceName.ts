import { z } from "zod";

/**Known color space names.*/
export const ColorSpaceName = z
  .enum(["sRGB", "US_Web_Coated_SWOP_v2"])
  .describe("Known color space names.");
export type ColorSpaceName = z.infer<typeof ColorSpaceName>;
