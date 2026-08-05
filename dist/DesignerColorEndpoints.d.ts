import { z } from "zod";
declare const _DesignerColorEndpoints: z.ZodObject<{
    all: z.ZodString;
    palettes: z.ZodString;
}, z.core.$strict>;
type _DesignerColorEndpointsSchema = typeof _DesignerColorEndpoints;
export interface DesignerColorEndpointsSchema extends _DesignerColorEndpointsSchema {
}
export declare const DesignerColorEndpoints: DesignerColorEndpointsSchema;
export type DesignerColorEndpoints = z.infer<typeof DesignerColorEndpoints>;
export {};
//# sourceMappingURL=DesignerColorEndpoints.d.ts.map