import { z } from "zod";
declare const _DesignerImageInkMapping: z.ZodObject<{
    cluster: import("./DesignerImageColorCluster.js").DesignerImageColorClusterSchema;
    paletteColor: import("./Color.js").ColorSchema;
    deltaE: z.ZodNumber;
}, z.core.$strict>;
type _DesignerImageInkMappingSchema = typeof _DesignerImageInkMapping;
export interface DesignerImageInkMappingSchema extends _DesignerImageInkMappingSchema {
}
/**A colour cluster in an image and the palette ink it prints in.*/
export declare const DesignerImageInkMapping: DesignerImageInkMappingSchema;
export type DesignerImageInkMapping = z.infer<typeof DesignerImageInkMapping>;
export {};
//# sourceMappingURL=DesignerImageInkMapping.d.ts.map