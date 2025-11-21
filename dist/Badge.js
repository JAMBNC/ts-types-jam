import { z } from "zod/v4";
export const Badge = z.object({
    code: z.string(),
    images: z
        .array(z.object({
        context: z.enum(["product_detail", "product_listing"]),
        url: z.string().optional(),
    }))
        .optional(),
    priority: z.number().int().optional(),
    title: z.string().optional(),
});
