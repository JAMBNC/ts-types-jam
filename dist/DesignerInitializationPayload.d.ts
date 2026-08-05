import { z } from "zod";
declare const _DesignerInitializationPayload: z.ZodObject<{
    design: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    config: z.ZodUnion<readonly [import("./DesignerConfig.js").DesignerConfigSchema, z.ZodString]>;
    product: z.ZodUnion<readonly [import("./Product.js").ProductSchema, z.ZodString]>;
    endpoints: import("./DesignerEndpoints.js").DesignerEndpointsSchema;
    auth: import("./DesignerAuth.js").DesignerAuthSchema;
    pricing: z.ZodOptional<z.ZodUnion<readonly [import("./DesignerPricing.js").DesignerPricingSchema, z.ZodString]>>;
    uiLabels: import("./DesignerUiLabels.js").DesignerUiLabelsSchema;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    imageReduction: import("./DesignerImageReductionConfig.js").DesignerImageReductionConfigSchema;
    workspaceOptions: z.ZodOptional<z.ZodArray<import("./WorkspaceOption.js").WorkspaceOptionSchema>>;
}, z.core.$loose>;
type _DesignerInitializationPayloadSchema = typeof _DesignerInitializationPayload;
export interface DesignerInitializationPayloadSchema extends _DesignerInitializationPayloadSchema {
}
export declare const DesignerInitializationPayload: DesignerInitializationPayloadSchema;
export type DesignerInitializationPayload = z.infer<typeof DesignerInitializationPayload>;
export {};
//# sourceMappingURL=DesignerInitializationPayload.d.ts.map