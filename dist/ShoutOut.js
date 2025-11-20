import { z } from "zod/v4";
export const ShoutOut = z.object({
    display: z.string(),
    displayGroupId: z.string().optional(),
    type: z.enum(["generic", "product", "category", "group", "similar"]),
    url: z.string(),
});
