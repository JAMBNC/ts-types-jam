import { z } from "zod";
export const Badge = z
    .object({
    code: z.string(),
    images: z
        .array(z
        .object({
        context: z.enum(["product_detail", "product_listing"]),
        position: z.enum([
            "topRight",
            "bottomRight",
            "bottomLeft",
            "topLeft",
        ]),
        url: z.string(),
    })
        .passthrough())
        .optional(),
    priority: z.number().int().optional(),
    title: z.string().optional(),
})
    .passthrough();
