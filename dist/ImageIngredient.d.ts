import { z } from "zod";
/**An ingredient that renders a raster image.*/
export declare const ImageIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"image">;
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
    src: z.ZodString;
    naturalWidth: z.ZodOptional<z.ZodNumber>;
    naturalHeight: z.ZodOptional<z.ZodNumber>;
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
export type ImageIngredient = z.infer<typeof ImageIngredient>;
//# sourceMappingURL=ImageIngredient.d.ts.map