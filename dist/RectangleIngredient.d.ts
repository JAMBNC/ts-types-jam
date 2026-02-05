import { z } from "zod";
/**A rectangular ingredient with optional fill, stroke, and corner radius.*/
export declare const RectangleIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"rectangle">;
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
    hasFill: z.ZodBoolean;
    fillColor: z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$loose>, z.ZodNull]>;
    invertFill: z.ZodBoolean;
    hasStroke: z.ZodBoolean;
    strokeColor: z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        representations: z.ZodObject<{
            sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$loose>, z.ZodNull]>;
    strokeWidth: z.ZodNumber;
    lineDash: z.ZodUnion<readonly [z.ZodArray<z.ZodNumber>, z.ZodNull]>;
    strokeCornerRadius: z.ZodObject<{
        v: z.ZodNumber;
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
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
export type RectangleIngredient = z.infer<typeof RectangleIngredient>;
//# sourceMappingURL=RectangleIngredient.d.ts.map