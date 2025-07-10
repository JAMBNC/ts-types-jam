import { z } from "zod";

export const Taxonomy = z.object({
  additionalProperties: z.record(z.any()).optional(),
  master: z.string().optional(),
  primary: z.string().optional(),
  sub: z.string().optional(),
});
export type Taxonomy = z.infer<typeof Taxonomy>;
