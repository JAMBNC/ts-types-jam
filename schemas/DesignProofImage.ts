import { z } from "zod";

export const DesignProofImage = z
  .object({ url: z.string(), label: z.string() })
  .passthrough();
export type DesignProofImage = z.infer<typeof DesignProofImage>;
