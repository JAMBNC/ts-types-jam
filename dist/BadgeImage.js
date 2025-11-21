import { z } from "zod/v4";
export const BadgeImage = z.object({
    context: z.enum(["product_detail", "product_listing"]),
    url: z.string().optional(),
});
