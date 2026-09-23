import { z } from "zod";
const _Assets = z
    .object({
    lamination: z
        .record(z.string(), z.object({ src: z.string() }).strict())
        .optional(),
})
    .passthrough();
export const Assets = _Assets;
