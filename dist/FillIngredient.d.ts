import { z } from "zod";
/**An ingredient that fills a rectangular area with a solid color.*/
export declare const FillIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"fill">;
    metadata: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    isNew: z.ZodBoolean;
    viewLayer: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    rotation: z.ZodNumber;
    isDirty: z.ZodBoolean;
    simulated: z.ZodBoolean;
    isDropshadow: z.ZodBoolean;
    isTextureMask: z.ZodBoolean;
    isValidatorBoundingShape: z.ZodBoolean;
    opacity: z.ZodNumber;
    zIndex: z.ZodNumber;
    color: z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
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
export type FillIngredient = z.infer<typeof FillIngredient>;
//# sourceMappingURL=FillIngredient.d.ts.map