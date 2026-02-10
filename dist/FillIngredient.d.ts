import { z } from "zod";
/**An ingredient that fills a rectangular area with a solid color.*/
export declare const FillIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"fill">;
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
    color: z.ZodObject<{
        name: z.ZodString;
        hex: z.ZodString;
        id: z.ZodString;
        r: z.ZodOptional<z.ZodNumber>;
        g: z.ZodOptional<z.ZodNumber>;
        b: z.ZodOptional<z.ZodNumber>;
        a: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
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
export type FillIngredient = z.infer<typeof FillIngredient>;
//# sourceMappingURL=FillIngredient.d.ts.map