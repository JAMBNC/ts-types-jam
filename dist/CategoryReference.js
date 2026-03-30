import { z } from "zod";
export const CategoryReference = z
    .object({ id: z.number().int(), label: z.string(), url: z.string() })
    .passthrough();
