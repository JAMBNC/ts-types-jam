import { z } from "zod";
export declare const ProductCustomization: z.ZodObject<{
    designRequired: z.ZodOptional<z.ZodBoolean>;
    prebuiltConfigurationId: z.ZodOptional<z.ZodString>;
    prebuiltCustomizable: z.ZodOptional<z.ZodBoolean>;
    prebuiltDesign: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ProductCustomization = z.infer<typeof ProductCustomization>;
//# sourceMappingURL=ProductCustomization.d.ts.map