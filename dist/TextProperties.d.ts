import { z } from "zod";
/**Properties for displayed text*/
export declare const TextProperties: z.ZodObject<{
    alignment: z.ZodString;
    body: z.ZodArray<z.ZodString>;
    dataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    measurementDataSource: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    fontSize: z.ZodString;
    leading: z.ZodOptional<z.ZodNumber>;
    rotation: z.ZodOptional<z.ZodNumber>;
    strikethrough: z.ZodBoolean;
    underline: z.ZodBoolean;
    fontData: z.ZodObject<{
        uuid: z.ZodString;
        style: z.ZodEnum<{
            regular: "regular";
            italic: "italic";
            bold: "bold";
            bold_italic: "bold_italic";
            light: "light";
            light_italic: "light_italic";
        }>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    textLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        x: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        y: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        width: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        height: z.ZodObject<{
            v: z.ZodNumber;
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
        }, z.core.$strict>;
        span: z.ZodObject<{
            charPositions: z.ZodString;
            fontSize: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            glyphIds: z.ZodString;
            glyphPositions: z.ZodString;
            glyphXOffsets: z.ZodString;
            glyphYOffsets: z.ZodString;
            text: z.ZodString;
            x: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            y: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            width: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            height: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
        }, z.core.$loose>;
    }, z.core.$loose>>>;
}, z.core.$loose>;
export type TextProperties = z.infer<typeof TextProperties>;
//# sourceMappingURL=TextProperties.d.ts.map