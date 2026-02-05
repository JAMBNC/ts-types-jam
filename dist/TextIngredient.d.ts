import { z } from "zod";
/**An ingredient that renders text content with font and style properties.*/
export declare const TextIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"text">;
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
    text: z.ZodString;
    fontFamily: z.ZodString;
    fontSize: z.ZodObject<{
        v: z.ZodNumber;
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
    }, z.core.$strict>;
    fontColor: z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$loose>;
    fontWeight: z.ZodOptional<z.ZodString>;
    fontStyle: z.ZodOptional<z.ZodString>;
    textAlign: z.ZodOptional<z.ZodString>;
    lineHeight: z.ZodOptional<z.ZodNumber>;
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