import { z } from "zod";
import { DesignerConfig } from "./DesignerConfig.js";

const _ProductCustomization = z
  .object({
    designerConfig: DesignerConfig.optional(),
    prebuiltConfigurationId: z.string().optional(),
    prebuiltCustomizable: z.boolean().optional(),
    prebuiltDesign: z.boolean().optional(),
    stockType: z.string().optional(),
    styleCode: z.string().optional(),
    styleType: z.string().optional(),
  })
  .passthrough();
type _ProductCustomizationSchema = typeof _ProductCustomization;
export interface ProductCustomizationSchema extends _ProductCustomizationSchema {}
export const ProductCustomization: ProductCustomizationSchema =
  _ProductCustomization;
export type ProductCustomization = z.infer<typeof ProductCustomization>;
