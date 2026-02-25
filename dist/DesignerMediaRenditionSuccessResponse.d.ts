import { z } from "zod";
/**The response from the media rendition endpoint when the rendition succeeds.*/
export declare const DesignerMediaRenditionSuccessResponse: z.ZodObject<{
    success: z.ZodLiteral<true>;
    renditionInfo: z.ZodObject<{
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
            spotColors: z.ZodArray<z.ZodString>;
        }, z.core.$strict>;
        is_vector: z.ZodEnum<{
            0: "0";
            1: "1";
        }>;
        info: z.ZodObject<{
            is_vector: z.ZodEnum<{
                0: "0";
                1: "1";
            }>;
            mediaId: z.ZodString;
            guest: z.ZodBoolean;
        }, z.core.$strict>;
        type: z.ZodLiteral<"color">;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerMediaRenditionSuccessResponse = z.infer<typeof DesignerMediaRenditionSuccessResponse>;
//# sourceMappingURL=DesignerMediaRenditionSuccessResponse.d.ts.map