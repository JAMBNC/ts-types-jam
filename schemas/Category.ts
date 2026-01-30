import { z } from "zod";

export const Category = z
  .object({ identifiers: z.record(z.any()).optional(), name: z.string() })
  .passthrough();
export type Category = z.infer<typeof Category>;
