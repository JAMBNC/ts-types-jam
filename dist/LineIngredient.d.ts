import { z } from "zod";
/**A line ingredient*/
export declare const LineIngredient: z.ZodObject<{
    type: z.ZodLiteral<"line">;
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
    viewLayer: z.ZodOptional<z.ZodEnum<{
        background: "background";
        bleed: "bleed";
        mask: "mask";
        print: "print";
    }>>;
    zIndex: z.ZodNumber;
}, z.core.$strict>;
export type LineIngredient = z.infer<typeof LineIngredient>;
//# sourceMappingURL=LineIngredient.d.ts.map