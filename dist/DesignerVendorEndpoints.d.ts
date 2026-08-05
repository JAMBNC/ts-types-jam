import { z } from "zod";
declare const _DesignerVendorEndpoints: z.ZodObject<{
    colors: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
type _DesignerVendorEndpointsSchema = typeof _DesignerVendorEndpoints;
export interface DesignerVendorEndpointsSchema extends _DesignerVendorEndpointsSchema {
}
export declare const DesignerVendorEndpoints: DesignerVendorEndpointsSchema;
export type DesignerVendorEndpoints = z.infer<typeof DesignerVendorEndpoints>;
export {};
//# sourceMappingURL=DesignerVendorEndpoints.d.ts.map