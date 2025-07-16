import { z } from "zod/v4";
export const Tag = z.enum([
    "PRIMARY",
    "SMALL",
    "THUMBNAIL",
    "YOUR_LOGO_HERE",
    "INSIDE_VIEW",
    "SWATCH",
    "AMAZON",
    "CAROUSEL",
    "OTHER",
]);
