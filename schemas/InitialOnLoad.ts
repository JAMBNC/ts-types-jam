import { z } from "zod";

export const InitialOnLoad = z
  .object({ forceAdders: z.array(z.string()).optional() })
  .passthrough();
export type InitialOnLoad = z.infer<typeof InitialOnLoad>;
