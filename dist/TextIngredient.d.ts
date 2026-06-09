import { z } from "zod";
/**An ingredient that renders text content with font and style properties.*/
export declare const TextIngredient: z.ZodObject<{
    type: z.ZodLiteral<"text">;
    allowRewrite: z.ZodOptional<z.ZodBoolean>;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    rect: z.ZodObject<{
        height: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
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
    }, z.core.$strict>;
    rotation: z.ZodNumber;
    text: z.ZodObject<{
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
            name: z.ZodString;
            previewImageUrl: z.ZodOptional<z.ZodString>;
            priority: z.ZodOptional<z.ZodNumber>;
            style: z.ZodEnum<{
                regular: "regular";
                italic: "italic";
                bold: "bold";
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
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodOptional<z.ZodEnum<{
        background: "background";
        bleed: "bleed";
        mask: "mask";
        print: "print";
    }>>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
export type TextIngredient = z.infer<typeof TextIngredient>;
//# sourceMappingURL=TextIngredient.d.ts.map