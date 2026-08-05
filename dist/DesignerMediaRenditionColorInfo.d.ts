import { z } from "zod";
declare const _DesignerMediaRenditionColorInfo: z.ZodIntersection<z.ZodObject<{
    rgb: import("./RenditionChannel.js").RenditionChannelSchema;
    cmyk: import("./RenditionChannel.js").RenditionChannelSchema;
    colorAnalysis: z.ZodObject<{
        hasProcessCMY: z.ZodBoolean;
        hasProcessBlack: z.ZodBoolean;
        layerNames: z.ZodArray<z.ZodString>;
        spotColors: z.ZodArray<z.ZodObject<{
            values: z.ZodArray<z.ZodString>;
            cmykApproximation: z.ZodObject<{
                c: z.ZodNumber;
                m: z.ZodNumber;
                y: z.ZodNumber;
                k: z.ZodNumber;
                name: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    type: z.ZodLiteral<"color">;
}, z.core.$loose>, z.ZodObject<{
    isVector: z.ZodBoolean;
    mediaId: z.ZodString;
    guest: z.ZodBoolean;
}, z.core.$loose>>;
type _DesignerMediaRenditionColorInfoSchema = typeof _DesignerMediaRenditionColorInfo;
export interface DesignerMediaRenditionColorInfoSchema extends _DesignerMediaRenditionColorInfoSchema {
}
/**The color rendition data returned on a successful media rendition request.*/
export declare const DesignerMediaRenditionColorInfo: DesignerMediaRenditionColorInfoSchema;
export type DesignerMediaRenditionColorInfo = z.infer<typeof DesignerMediaRenditionColorInfo>;
export {};
//# sourceMappingURL=DesignerMediaRenditionColorInfo.d.ts.map