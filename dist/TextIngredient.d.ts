import { z } from "zod";
/**An ingredient that renders text content with font and style properties.*/
export declare const TextIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"text">;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    isNew: z.ZodBoolean;
    viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    rotation: z.ZodNumber;
    editable: z.ZodOptional<z.ZodBoolean>;
    isDirty: z.ZodBoolean;
    simulated: z.ZodBoolean;
    isDropshadow: z.ZodBoolean;
    isTextureMask: z.ZodBoolean;
    isValidatorBoundingShape: z.ZodBoolean;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    text: z.ZodObject<{
        alignment: z.ZodString;
        body: z.ZodArray<z.ZodString>;
        isPlaceholder: z.ZodOptional<z.ZodBoolean>;
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
    rect: z.ZodObject<{
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
    }, z.core.$strict>;
}, z.core.$strict>;
export type TextIngredient = z.infer<typeof TextIngredient>;
//# sourceMappingURL=TextIngredient.d.ts.map