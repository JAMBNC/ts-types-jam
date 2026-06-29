import { z } from "zod";
/**The response from the media rendition endpoint.*/
export declare const DesignerMediaRenditionResponse: z.ZodUnion<readonly [z.ZodObject<{
    success: z.ZodLiteral<true>;
    renditionInfo: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
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
    }, z.core.$loose>, z.ZodRecord<z.ZodString, z.ZodNever>>>, z.ZodIntersection<z.ZodObject<{
        isVector: z.ZodBoolean;
        mediaId: z.ZodString;
        guest: z.ZodBoolean;
    }, z.core.$loose>, z.ZodIntersection<z.ZodObject<{
        bw: z.ZodObject<{
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
        type: z.ZodLiteral<"foil">;
    }, z.core.$loose>, z.ZodRecord<z.ZodString, z.ZodNever>>>]>;
}, z.core.$strict>, z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>]>;
export type DesignerMediaRenditionResponse = z.infer<typeof DesignerMediaRenditionResponse>;
//# sourceMappingURL=DesignerMediaRenditionResponse.d.ts.map