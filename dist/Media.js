import { z } from "zod/v4";
export const Media = z.object({
    altText: z.string().optional(),
    label: z.string().optional(),
    mediaType: z.enum(["Image", "Video"]),
    tags: z
        .array(z.enum([
        "primary",
        "small",
        "thumbnail",
        "yourLogoHere",
        "insideView",
        "swatch",
        "amazon",
        "carousel",
        "other",
    ]))
        .optional(),
    url: z.string(),
});
