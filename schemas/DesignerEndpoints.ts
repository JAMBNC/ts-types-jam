import { z } from "zod";
import { DesignerAddressEndpoints } from "./DesignerAddressEndpoints.js";
import { DesignerColorEndpoints } from "./DesignerColorEndpoints.js";
import { DesignerFontEndpoints } from "./DesignerFontEndpoints.js";
import { DesignerImageEndpoints } from "./DesignerImageEndpoints.js";
import { DesignerVendorEndpoints } from "./DesignerVendorEndpoints.js";

const _DesignerEndpoints = z
  .object({
    image: DesignerImageEndpoints,
    address: DesignerAddressEndpoints.optional(),
    fonts: DesignerFontEndpoints,
    colors: DesignerColorEndpoints,
    vendor: DesignerVendorEndpoints.optional(),
  })
  .strict();
type _DesignerEndpointsSchema = typeof _DesignerEndpoints;
export interface DesignerEndpointsSchema extends _DesignerEndpointsSchema {}
export const DesignerEndpoints: DesignerEndpointsSchema = _DesignerEndpoints;
export type DesignerEndpoints = z.infer<typeof DesignerEndpoints>;
