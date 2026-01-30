import { z } from "zod";

export const BadgeImage = z
  .object({
    context: z.enum(["product_detail", "product_listing"]),
    position: z.enum(["topRight", "bottomRight", "bottomLeft", "topLeft"]),
    url: z.string(),
  })
  .passthrough();
export type BadgeImage = z.infer<typeof BadgeImage>;
