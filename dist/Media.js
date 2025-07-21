import { z } from "zod/v4";
export const Media = z.object({
    altText: z.string().optional(),
    mediaType: z.enum(["IMAGE", "VIDEO"]),
    tags: z
        .array(z.enum([
        "PRIMARY",
        "SMALL",
        "THUMBNAIL",
        "YOUR_LOGO_HERE",
        "INSIDE_VIEW",
        "SWATCH",
        "AMAZON",
        "CAROUSEL",
        "OTHER",
    ]))
        .optional(),
    url: z.string(),
});
