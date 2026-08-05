import { z } from "zod";
const _Taxonomy = z
    .object({
    master: z.string().optional(),
    primary: z.string().optional(),
    sub: z.string().optional(),
})
    .passthrough();
export const Taxonomy = _Taxonomy;
