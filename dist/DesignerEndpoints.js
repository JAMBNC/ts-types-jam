import { z } from "zod";
import { DesignerColorEndpoints } from "./DesignerColorEndpoints.js";
import { DesignerFontEndpoints } from "./DesignerFontEndpoints.js";
import { DesignerImageEndpoints } from "./DesignerImageEndpoints.js";
import { DesignerSaveEndpoints } from "./DesignerSaveEndpoints.js";
import { DesignerVendorEndpoints } from "./DesignerVendorEndpoints.js";
export const DesignerEndpoints = z
    .object({
    design: DesignerSaveEndpoints,
    image: DesignerImageEndpoints,
    fonts: DesignerFontEndpoints,
    colors: DesignerColorEndpoints,
    vendor: DesignerVendorEndpoints.optional(),
})
    .strict();
