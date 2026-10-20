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
    /**Whether variable elements in this color are priced by `pricingGroup` instead of being converted to digital. When false or omitted, variable elements force digital printing.*/
    variableElementUsesPricingGroup: z
        .boolean()
        .describe("Whether variable elements in this color are priced by `pricingGroup` instead of being converted to digital. When false or omitted, variable elements force digital printing.")
        .default(false),
})
    .passthrough();
export const VendorProcess = _VendorProcess;
