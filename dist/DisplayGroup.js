import { z } from "zod";
export const DisplayGroup = z.object({
    id: z.string(),
    identifiers: z.record(z.any()).optional(),
    pivots: z.array(z.any()),
    skus: z.array(z.string()),
});
