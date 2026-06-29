import { z } from "zod";
/**The color rendition data returned on a successful media rendition request.*/
export declare const DesignerMediaRenditionFoilInfo: z.ZodIntersection<z.ZodObject<{
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
}, z.core.$loose>, z.ZodObject<{
    isVector: z.ZodBoolean;
    mediaId: z.ZodString;
    guest: z.ZodBoolean;
}, z.core.$loose>>;
export type DesignerMediaRenditionFoilInfo = z.infer<typeof DesignerMediaRenditionFoilInfo>;
//# sourceMappingURL=DesignerMediaRenditionFoilInfo.d.ts.map