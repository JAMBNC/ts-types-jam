import { z } from "zod";
const _DesignerVendorEndpoints = z
    .object({
    /**The endpoint URL for retrieving all supported vendor colors*/
    colors: z
        .string()
        .url()
        .describe("The endpoint URL for retrieving all supported vendor colors")
        .optional(),
})
    .strict();
export const DesignerVendorEndpoints = _DesignerVendorEndpoints;
