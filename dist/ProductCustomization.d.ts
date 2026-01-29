import { z } from "zod";
export declare const ProductCustomization: z.ZodObject<{
    prebuiltConfigurationId: z.ZodOptional<z.ZodString>;
    prebuiltCustomizable: z.ZodOptional<z.ZodBoolean>;
    prebuiltDesign: z.ZodOptional<z.ZodBoolean>;
    stockType: z.ZodOptional<z.ZodString>;
    styleType: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ProductCustomization = z.infer<typeof ProductCustomization>;
//# sourceMappingURL=ProductCustomization.d.ts.map