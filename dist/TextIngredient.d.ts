import { z } from "zod";
/**An ingredient that renders text content with font and style properties.*/
export declare const TextIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"text">;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
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
        hex: z.ZodString;
        id: z.ZodString;
        r: z.ZodOptional<z.ZodNumber>;
        g: z.ZodOptional<z.ZodNumber>;
        b: z.ZodOptional<z.ZodNumber>;
        a: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
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