import { z } from "zod";
const _Category = z
    .object({
    identifiers: z.record(z.string(), z.any()).optional(),
    name: z.string(),
})
    .passthrough();
export const Category = _Category;
