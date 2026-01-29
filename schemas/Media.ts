import { z } from "zod";

export const Media = z.object({
  altText: z.string().optional(),
  label: z.string().optional(),
  mediaType: z.enum(["image", "video"]),
  previewUrl: z.string().optional(),
  tags: z
    .array(
      z.enum([
        "primary",
        "small",
        "thumbnail",
        "yourLogoHere",
        "insideView",
        "swatch",
        "amazon",
        "carousel",
        "other",
      ]),
    )
    .optional(),
  url: z.string(),
});
export type Media = z.infer<typeof Media>;
