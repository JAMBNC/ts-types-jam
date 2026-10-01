import { z } from "zod";
declare const _DesignerTemplateEndpoints: z.ZodObject<{
    template: z.ZodString;
}, z.core.$strict>;
type _DesignerTemplateEndpointsSchema = typeof _DesignerTemplateEndpoints;
export interface DesignerTemplateEndpointsSchema extends _DesignerTemplateEndpointsSchema {
}
export declare const DesignerTemplateEndpoints: DesignerTemplateEndpointsSchema;
export type DesignerTemplateEndpoints = z.infer<typeof DesignerTemplateEndpoints>;
export {};
//# sourceMappingURL=DesignerTemplateEndpoints.d.ts.map