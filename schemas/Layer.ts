import { z } from "zod";

export const Layer = z
  .object({ process: z.string(), color: z.string() })
  .passthrough();
export type Layer = z.infer<typeof Layer>;
