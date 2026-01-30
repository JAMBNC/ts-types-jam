import { z } from "zod";
export const ShoutOut = z
    .object({
    display: z.string(),
    type: z.enum(["generic", "product", "category", "group", "similar"]),
    url: z.string(),
    value: z.string().optional(),
})
    .passthrough();
