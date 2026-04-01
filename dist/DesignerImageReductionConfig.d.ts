import { z } from "zod";
export declare const DesignerImageReductionConfig: z.ZodDefault<z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    maxColors: z.ZodDefault<z.ZodNumber>;
    reductionEndpointUrl: z.ZodOptional<z.ZodString>;
    recolorEndpointUrl: z.ZodOptional<z.ZodString>;
}, z.core.$loose>>;
export type DesignerImageReductionConfig = z.infer<typeof DesignerImageReductionConfig>;
//# sourceMappingURL=DesignerImageReductionConfig.d.ts.map