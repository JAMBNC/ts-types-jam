import { z } from "zod";

export const ProductMedia = z.object({
  altText: z.string().optional(),
  mediaType: z.enum(["Image", "Video"]),
  tags: z.array(z.string()).optional(),
  url: z.string(),
});
export type ProductMedia = z.infer<typeof ProductMedia>;
