import { z } from "zod";

export const InitialOnLoad = z
  .object({ force_adders: z.array(z.string()).optional() })
  .passthrough();
export type InitialOnLoad = z.infer<typeof InitialOnLoad>;
