import { z } from "zod";

export const AnalyzedProof = z
  .object({ url: z.string(), label: z.string() })
  .passthrough();
export type AnalyzedProof = z.infer<typeof AnalyzedProof>;
