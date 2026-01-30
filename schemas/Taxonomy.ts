import { z } from "zod";

export const Taxonomy = z
  .object({
    master: z.string().optional(),
    primary: z.string().optional(),
    sub: z.string().optional(),
  })
  .passthrough();
export type Taxonomy = z.infer<typeof Taxonomy>;
