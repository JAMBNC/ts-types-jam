import { z } from "zod";
/**The color rendition data returned on a successful media rendition request.*/
export declare const DesignerMediaRenditionColorInfo: z.ZodIntersection<z.ZodObject<{
    isVector: z.ZodBoolean;
    mediaId: z.ZodString;
    guest: z.ZodBoolean;
}, z.core.$loose>, z.ZodIntersection<z.ZodObject<{
    rgb: z.ZodObject<{
        source: z.ZodObject<{
            colorspace: z.ZodString;
            dpi: z.ZodNumber;
            type: z.ZodString;
            height: z.ZodNumber;
            width: z.ZodNumber;
            size: z.ZodString;
            url: z.ZodString;
        }, z.core.$strict>;
        url: z.ZodString;
    }, z.core.$strict>;
    cmyk: z.ZodObject<{
        source: z.ZodObject<{
            colorspace: z.ZodString;
            dpi: z.ZodNumber;
            type: z.ZodString;
            height: z.ZodNumber;
            width: z.ZodNumber;
            size: z.ZodString;
            url: z.ZodString;
        }, z.core.$strict>;
        url: z.ZodString;
    }, z.core.$strict>;
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
}, z.core.$loose>, z.ZodRecord<z.ZodString, z.ZodNever>>>;
export type DesignerMediaRenditionColorInfo = z.infer<typeof DesignerMediaRenditionColorInfo>;
//# sourceMappingURL=DesignerMediaRenditionColorInfo.d.ts.map