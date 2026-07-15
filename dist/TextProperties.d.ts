import { z } from "zod";
/**Properties for displayed text*/
export declare const TextProperties: z.ZodObject<{
    alignment: z.ZodEnum<{
        left: "left";
        center: "center";
        right: "right";
    }>;
    body: z.ZodArray<z.ZodString>;
    dataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    fontData: z.ZodObject<{
        format: z.ZodOptional<z.ZodEnum<{
            otf: "otf";
            ttf: "ttf";
        }>>;
        family: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        previewImageUrl: z.ZodOptional<z.ZodString>;
        priority: z.ZodOptional<z.ZodNumber>;
        style: z.ZodEnum<{
            bold: "bold";
            regular: "regular";
            italic: "italic";
            bold_italic: "bold_italic";
            light: "light";
            light_italic: "light_italic";
        }>;
        url: z.ZodOptional<z.ZodString>;
        uuid: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    fontSize: z.ZodString;
    leading: z.ZodOptional<z.ZodNumber>;
    measurementDataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    placeholder: z.ZodOptional<z.ZodBoolean>;
    rotation: z.ZodOptional<z.ZodNumber>;
    strikethrough: z.ZodBoolean;
    textLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        height: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        span: z.ZodObject<{
            charPositions: z.ZodString;
            fontSize: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            glyphIds: z.ZodString;
            glyphIDs: z.ZodOptional<z.ZodString>;
            glyphPositions: z.ZodString;
            glyphXOffsets: z.ZodString;
            glyphYOffsets: z.ZodString;
            height: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            text: z.ZodString;
            width: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$loose>;
        width: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        x: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        y: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
    }, z.core.$loose>>>;
    underline: z.ZodBoolean;
}, z.core.$loose>;
export type TextProperties = z.infer<typeof TextProperties>;
//# sourceMappingURL=TextProperties.d.ts.map