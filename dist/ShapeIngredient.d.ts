import { z } from "zod";
/**An ingredient defined by vector paths with optional fill and stroke.*/
export declare const ShapeIngredient: z.ZodObject<{
    type: z.ZodLiteral<"shape">;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    fillColor: z.ZodOptional<z.ZodObject<{
        a: z.ZodOptional<z.ZodNumber>;
        b: z.ZodOptional<z.ZodNumber>;
        g: z.ZodOptional<z.ZodNumber>;
        hex: z.ZodString;
        id: z.ZodString;
        name: z.ZodString;
        r: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    id: z.ZodString;
    invertFill: z.ZodBoolean;
    lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
    paths: z.ZodRecord<z.ZodString, z.ZodObject<{
        closed: z.ZodBoolean;
        points: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"bezier">;
            ix: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            iy: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            ox: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            oy: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            ix: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            iy: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            ox: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            oy: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            x: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
            y: z.ZodObject<{
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    pt: "pt";
                    px: "px";
                }>;
                v: z.ZodNumber;
            }, z.core.$loose>;
        }, z.core.$strict>]>>;
        pointsOrdered: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    pathsOrdered: z.ZodArray<z.ZodString>;
    rect: z.ZodObject<{
        height: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        width: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        x: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        y: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
    }, z.core.$strict>;
    rotation: z.ZodNumber;
    strokeColor: z.ZodOptional<z.ZodObject<{
        a: z.ZodOptional<z.ZodNumber>;
        b: z.ZodOptional<z.ZodNumber>;
        g: z.ZodOptional<z.ZodNumber>;
        hex: z.ZodString;
        id: z.ZodString;
        name: z.ZodString;
        r: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    strokeWidth: z.ZodOptional<z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            pt: "pt";
            px: "px";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>>;
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
export type ShapeIngredient = z.infer<typeof ShapeIngredient>;
//# sourceMappingURL=ShapeIngredient.d.ts.map