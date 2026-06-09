import { z } from "zod";
/**An ingredient that fills a rectangular area with a solid color.*/
export declare const FillIngredient: z.ZodObject<{
    type: z.ZodLiteral<"fill">;
    color: z.ZodObject<{
        a: z.ZodOptional<z.ZodNumber>;
        b: z.ZodOptional<z.ZodNumber>;
        g: z.ZodOptional<z.ZodNumber>;
        hex: z.ZodString;
        id: z.ZodString;
        name: z.ZodString;
        r: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
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
    textureMask: z.ZodOptional<z.ZodBoolean>;
    validatorBoundingShape: z.ZodOptional<z.ZodBoolean>;
    viewLayer: z.ZodUnion<readonly [z.ZodNull, z.ZodEnum<{
        background: "background";
        bleed: "bleed";
        mask: "mask";
        print: "print";
    }>]>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
export type FillIngredient = z.infer<typeof FillIngredient>;
//# sourceMappingURL=FillIngredient.d.ts.map