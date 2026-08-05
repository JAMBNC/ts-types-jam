import { z } from "zod";

const _ColorSpaceName = z
  .enum(["sRGB", "US_Web_Coated_SWOP_v2", "CIELAB"])
  .describe("Known color space names.");
type _ColorSpaceNameSchema = typeof _ColorSpaceName;
export interface ColorSpaceNameSchema extends _ColorSpaceNameSchema {}
/**Known color space names.*/
export const ColorSpaceName: ColorSpaceNameSchema = _ColorSpaceName;
export type ColorSpaceName = z.infer<typeof ColorSpaceName>;
