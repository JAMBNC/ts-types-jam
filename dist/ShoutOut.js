import { z } from "zod/v4";
export const ShoutOut = z.object({
    display: z.string(),
    displayGroupId: z.number().int().optional(),
    url: z.string(),
});
