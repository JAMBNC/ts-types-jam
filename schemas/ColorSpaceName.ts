import { z } from "zod/v4";

export const ColorSpaceName = z
  .enum([
    "sRGB",
    "Adobe RGB",
    "Display P3",
    "ProPhoto RGB",
    "US Web Coated SWOP v2",
    "Coated FOGRA39",
    "Japan Color 2001 Coated",
    "PMS",
    "CIELAB",
  ])
  .describe("Known color space names.");
export type ColorSpaceName = z.infer<typeof ColorSpaceName>;
