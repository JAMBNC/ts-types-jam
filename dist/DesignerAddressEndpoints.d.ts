import { z } from "zod";
declare const _DesignerAddressEndpoints: z.ZodObject<{
    addressBooks: z.ZodString;
    addressBook: z.ZodString;
    upload: z.ZodString;
}, z.core.$strict>;
type _DesignerAddressEndpointsSchema = typeof _DesignerAddressEndpoints;
export interface DesignerAddressEndpointsSchema extends _DesignerAddressEndpointsSchema {
}
export declare const DesignerAddressEndpoints: DesignerAddressEndpointsSchema;
export type DesignerAddressEndpoints = z.infer<typeof DesignerAddressEndpoints>;
export {};
//# sourceMappingURL=DesignerAddressEndpoints.d.ts.map