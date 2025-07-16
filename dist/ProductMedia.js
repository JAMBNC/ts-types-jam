import { z } from "zod/v4";
export const ProductMedia = z.object({
    altText: z.string().optional(),
    mediaType: z.enum(["Image", "Video"]),
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
