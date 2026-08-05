import { z } from "zod";
declare const _ProductCustomization: z.ZodObject<{
    designerConfig: z.ZodOptional<import("./DesignerConfig.js").DesignerConfigSchema>;
    prebuiltConfigurationId: z.ZodOptional<z.ZodString>;
    prebuiltCustomizable: z.ZodOptional<z.ZodBoolean>;
    prebuiltDesign: z.ZodOptional<z.ZodBoolean>;
    stockType: z.ZodOptional<z.ZodString>;
    styleCode: z.ZodOptional<z.ZodString>;
    styleType: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _ProductCustomizationSchema = typeof _ProductCustomization;
export interface ProductCustomizationSchema extends _ProductCustomizationSchema {
}
export declare const ProductCustomization: ProductCustomizationSchema;
export type ProductCustomization = z.infer<typeof ProductCustomization>;
export {};
//# sourceMappingURL=ProductCustomization.d.ts.map