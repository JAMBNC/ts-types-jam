import { z } from "zod";
declare const _DesignerImageReductionConfig: z.ZodDefault<z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    maxColors: z.ZodDefault<z.ZodNumber>;
    reductionEndpointUrl: z.ZodOptional<z.ZodString>;
    recolorEndpointUrl: z.ZodOptional<z.ZodString>;
}, z.core.$loose>>;
type _DesignerImageReductionConfigSchema = typeof _DesignerImageReductionConfig;
export interface DesignerImageReductionConfigSchema extends _DesignerImageReductionConfigSchema {
}
export declare const DesignerImageReductionConfig: DesignerImageReductionConfigSchema;
export type DesignerImageReductionConfig = z.infer<typeof DesignerImageReductionConfig>;
export {};
//# sourceMappingURL=DesignerImageReductionConfig.d.ts.map