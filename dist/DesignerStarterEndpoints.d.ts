import { z } from "zod";
declare const _DesignerStarterEndpoints: z.ZodObject<{
    list: z.ZodString;
    design: z.ZodString;
}, z.core.$strict>;
type _DesignerStarterEndpointsSchema = typeof _DesignerStarterEndpoints;
export interface DesignerStarterEndpointsSchema extends _DesignerStarterEndpointsSchema {
}
export declare const DesignerStarterEndpoints: DesignerStarterEndpointsSchema;
export type DesignerStarterEndpoints = z.infer<typeof DesignerStarterEndpoints>;
export {};
//# sourceMappingURL=DesignerStarterEndpoints.d.ts.map