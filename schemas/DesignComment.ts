import { z } from "zod";

export const DesignComment = z
  .object({
    current_status: z.string(),
    date: z.string(),
    author: z.string(),
    internal: z.string(),
    comment: z.string(),
  })
  .passthrough();
export type DesignComment = z.infer<typeof DesignComment>;
