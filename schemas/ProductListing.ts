import { z } from "zod";

export const ProductListing = z.object({
  isCustomizable: z.boolean(),
  mainImageUrl: z.string().optional(),
  pivotValues: z.record(z.any()).optional(),
  shortName: z.string().optional(),
  sku: z.string(),
});
export type ProductListing = z.infer<typeof ProductListing>;
