import { z } from "zod/v4";
export const Taxonomy = z.object({
    master: z.string().optional(),
    primary: z.string().optional(),
    sub: z.string().optional(),
});
