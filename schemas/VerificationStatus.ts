import { z } from "zod";

export const VerificationStatus = z
  .object({
    exists: z.string(),
    "product-support": z.string(),
    purchase: z.string(),
    api: z.string(),
  })
  .passthrough();
export type VerificationStatus = z.infer<typeof VerificationStatus>;
