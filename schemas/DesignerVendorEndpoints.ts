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
type _DesignerVendorEndpointsSchema = typeof _DesignerVendorEndpoints;
export interface DesignerVendorEndpointsSchema extends _DesignerVendorEndpointsSchema {}
export const DesignerVendorEndpoints: DesignerVendorEndpointsSchema =
  _DesignerVendorEndpoints;
export type DesignerVendorEndpoints = z.infer<typeof DesignerVendorEndpoints>;
