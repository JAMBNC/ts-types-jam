import { z } from "zod";
declare const _DesignerEndpoints: z.ZodObject<{
    image: import("./DesignerImageEndpoints.js").DesignerImageEndpointsSchema;
    address: z.ZodOptional<import("./DesignerAddressEndpoints.js").DesignerAddressEndpointsSchema>;
    fonts: import("./DesignerFontEndpoints.js").DesignerFontEndpointsSchema;
    colors: import("./DesignerColorEndpoints.js").DesignerColorEndpointsSchema;
    vendor: z.ZodOptional<import("./DesignerVendorEndpoints.js").DesignerVendorEndpointsSchema>;
}, z.core.$strict>;
type _DesignerEndpointsSchema = typeof _DesignerEndpoints;
export interface DesignerEndpointsSchema extends _DesignerEndpointsSchema {
}
export declare const DesignerEndpoints: DesignerEndpointsSchema;
export type DesignerEndpoints = z.infer<typeof DesignerEndpoints>;
export {};
//# sourceMappingURL=DesignerEndpoints.d.ts.map