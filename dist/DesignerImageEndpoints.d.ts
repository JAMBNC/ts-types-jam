import { z } from "zod";
declare const _DesignerImageEndpoints: z.ZodObject<{
    gallery: z.ZodString;
    upload: z.ZodAny;
    delete: z.ZodString;
    rendition: z.ZodString;
    templateAsset: z.ZodString;
}, z.core.$strict>;
type _DesignerImageEndpointsSchema = typeof _DesignerImageEndpoints;
export interface DesignerImageEndpointsSchema extends _DesignerImageEndpointsSchema {
}
export declare const DesignerImageEndpoints: DesignerImageEndpointsSchema;
export type DesignerImageEndpoints = z.infer<typeof DesignerImageEndpoints>;
export {};
//# sourceMappingURL=DesignerImageEndpoints.d.ts.map