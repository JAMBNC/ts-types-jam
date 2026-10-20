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
    /**Alternative pricing groups keyed by an override identifier, such as `variableElement` for colors used on variable elements. A string value is the pricing group to use instead of `pricingGroup`; `false` means the color is not allowed in that situation. Omitted keys fall back to `pricingGroup`.*/
    overridePricingGroups: z
      .record(z.string(), z.union([z.string(), z.literal(false)]))
      .describe(
        "Alternative pricing groups keyed by an override identifier, such as `variableElement` for colors used on variable elements. A string value is the pricing group to use instead of `pricingGroup`; `false` means the color is not allowed in that situation. Omitted keys fall back to `pricingGroup`.",
      )
      .optional(),
  })
  .passthrough();
type _VendorProcessSchema = typeof _VendorProcess;
export interface VendorProcessSchema extends _VendorProcessSchema {}
export const VendorProcess: VendorProcessSchema = _VendorProcess;
export type VendorProcess = z.infer<typeof VendorProcess>;
