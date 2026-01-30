import { z } from "zod";
export const Category = z
    .object({ identifiers: z.record(z.any()).optional(), name: z.string() })
    .passthrough();
