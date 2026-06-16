import { z } from "zod";
/**A circle ingredient with fill and stroke.*/
export declare const CircleIngredient: z.ZodObject<{
    type: z.ZodLiteral<"circle">;
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
    invertFill: z.ZodOptional<z.ZodBoolean>;
    lineDash: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
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
    radius: z.ZodObject<{
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
            px: "px";
            pt: "pt";
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
export type CircleIngredient = z.infer<typeof CircleIngredient>;
//# sourceMappingURL=CircleIngredient.d.ts.map