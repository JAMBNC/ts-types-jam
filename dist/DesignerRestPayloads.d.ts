import { z } from "zod";
/**A union of all possible Designer REST API request and response types.*/
export declare const DesignerRestPayloads: z.ZodUnion<readonly [z.ZodObject<{
    page: z.ZodNumber;
    hasNextPage: z.ZodBoolean;
    images: z.ZodArray<z.ZodObject<{
        mediaId: z.ZodString;
        thumbnailUrl: z.ZodString;
        label: z.ZodString;
        isVector: z.ZodBoolean;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    data: z.ZodObject<{
        label: z.ZodString;
        mediaBase64: z.ZodString;
        contentType: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodUnion<readonly [z.ZodObject<{
    success: z.ZodLiteral<true>;
    mediaInfo: z.ZodObject<{
        mediaId: z.ZodString;
        thumbnailUrl: z.ZodString;
        label: z.ZodString;
        isVector: z.ZodBoolean;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>]>, z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strict>, z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>]>, z.ZodObject<{
    status: z.ZodBoolean;
    designId: z.ZodString;
}, z.core.$strict>]>;
export type DesignerRestPayloads = z.infer<typeof DesignerRestPayloads>;
//# sourceMappingURL=DesignerRestPayloads.d.ts.map