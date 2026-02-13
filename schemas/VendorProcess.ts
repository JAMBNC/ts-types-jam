import { z } from "zod";

export const VendorProcess = z
  .object({
    /**Color*/
    apiColorName: z.string().describe("Color").optional(),
    /**Vendor process specific color name*/
    colorName: z
      .string()
      .describe("Vendor process specific color name")
      .optional(),
    /**Pricing group names keyed by supported process.*/
    pricingGroup: z
      .string()
      .describe("Pricing group names keyed by supported process.")
      .optional(),
  })
  .passthrough();
export type VendorProcess = z.infer<typeof VendorProcess>;
