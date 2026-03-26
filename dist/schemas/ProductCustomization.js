import { z } from "zod";
import { DesignerConfig } from "./DesignerConfig.js";
export const ProductCustomization = z
    .object({
    designerConfig: DesignerConfig.optional(),
    prebuiltConfigurationId: z.string().optional(),
    prebuiltCustomizable: z.boolean().optional(),
    prebuiltDesign: z.boolean().optional(),
    stockType: z.string().optional(),
    styleType: z.string().optional(),
})
    .passthrough();
