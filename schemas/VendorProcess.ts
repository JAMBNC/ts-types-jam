import { z } from "zod";

export const VendorProcess = z
  .object({
    pricingGroup: z.string().optional(),
    /**Pricing group names keyed by supported process.*/
    vendorColorName: z
      .string()
      .describe("Pricing group names keyed by supported process.")
      .optional(),
  })
  .passthrough();
export type VendorProcess = z.infer<typeof VendorProcess>;
