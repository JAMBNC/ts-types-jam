import { z } from "zod";
const _CategoryReference = z
    .object({ id: z.number().int(), label: z.string(), url: z.string() })
    .passthrough();
export const CategoryReference = _CategoryReference;
