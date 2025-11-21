import { z } from "zod/v4";
export const Badge = z.object({
    id: z.string().optional(),
    imageUrl: z.string().optional(),
    priority: z.number().int().optional(),
    title: z.string().optional(),
});
