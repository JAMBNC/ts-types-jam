import { z } from "zod";
/**An ingredient defined by vector paths with optional fill and stroke.*/
export declare const ShapeIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"shape">;
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
    hasFill: z.ZodBoolean;
    fillColor: z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        hex: z.ZodString;
        id: z.ZodString;
        r: z.ZodOptional<z.ZodNumber>;
        g: z.ZodOptional<z.ZodNumber>;
        b: z.ZodOptional<z.ZodNumber>;
        a: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>, z.ZodNull]>;
    invertFill: z.ZodBoolean;
    hasStroke: z.ZodBoolean;
    strokeColor: z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        hex: z.ZodString;
        id: z.ZodString;
        r: z.ZodOptional<z.ZodNumber>;
        g: z.ZodOptional<z.ZodNumber>;
        b: z.ZodOptional<z.ZodNumber>;
        a: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>, z.ZodNull]>;
    strokeWidth: z.ZodNumber;
    lineDash: z.ZodUnion<readonly [z.ZodArray<z.ZodNumber>, z.ZodNull]>;
    paths: z.ZodRecord<z.ZodString, z.ZodObject<{
        isClosed: z.ZodString;
        points: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"bezier">;
            ix: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            iy: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            ox: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            oy: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
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
        }, z.core.$strict>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            ix: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            iy: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            ox: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
            oy: z.ZodObject<{
                v: z.ZodNumber;
                u: z.ZodEnum<{
                    in: "in";
                    mm: "mm";
                    px: "px";
                    pt: "pt";
                }>;
            }, z.core.$strict>;
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
        }, z.core.$strict>]>>;
        pointsOrdered: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    pathsOrdered: z.ZodArray<z.ZodString>;
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
export type ShapeIngredient = z.infer<typeof ShapeIngredient>;
//# sourceMappingURL=ShapeIngredient.d.ts.map