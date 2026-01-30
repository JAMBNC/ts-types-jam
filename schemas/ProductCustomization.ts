import { z } from "zod";

export const ProductCustomization = z
  .object({
    prebuiltConfigurationId: z.string().optional(),
    prebuiltCustomizable: z.boolean().optional(),
    prebuiltDesign: z.boolean().optional(),
    stockType: z.string().optional(),
    styleType: z.string().optional(),
  })
  .passthrough();
export type ProductCustomization = z.infer<typeof ProductCustomization>;
