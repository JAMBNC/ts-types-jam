import { z } from "zod";

const _VendorProcess = z
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
type _VendorProcessSchema = typeof _VendorProcess;
export interface VendorProcessSchema extends _VendorProcessSchema {}
export const VendorProcess: VendorProcessSchema = _VendorProcess;
export type VendorProcess = z.infer<typeof VendorProcess>;
