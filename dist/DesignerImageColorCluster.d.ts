import { z } from "zod";
declare const _DesignerImageColorCluster: z.ZodObject<{
    rgb: z.ZodArray<z.ZodNumber>;
    lab: z.ZodArray<z.ZodNumber>;
    centroidLab: z.ZodArray<z.ZodNumber>;
    peakRgb: z.ZodArray<z.ZodNumber>;
    pixelCount: z.ZodNumber;
    fuzz: z.ZodEnum<{
        blended: "blended";
        tight: "tight";
    }>;
}, z.core.$strict>;
type _DesignerImageColorClusterSchema = typeof _DesignerImageColorCluster;
export interface DesignerImageColorClusterSchema extends _DesignerImageColorClusterSchema {
}
/**One colour fusion found in an image, as its analysis reports it.*/
export declare const DesignerImageColorCluster: DesignerImageColorClusterSchema;
export type DesignerImageColorCluster = z.infer<typeof DesignerImageColorCluster>;
export {};
//# sourceMappingURL=DesignerImageColorCluster.d.ts.map