import { z } from "zod";
/**An ingredient that renders a raster image.*/
export declare const ImageIngredient: z.ZodObject<{
    type: z.ZodLiteral<"image">;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    naturalHeight: z.ZodOptional<z.ZodNumber>;
    naturalWidth: z.ZodOptional<z.ZodNumber>;
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
    imageRect: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strict>>;
    legacyPixelData: z.ZodOptional<z.ZodObject<{
        realWidthPixels: z.ZodOptional<z.ZodNumber>;
        realHeightPixels: z.ZodOptional<z.ZodNumber>;
        imgWidthPixels: z.ZodOptional<z.ZodNumber>;
        imgHeightPixels: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    rotation: z.ZodNumber;
    src: z.ZodString;
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
export type ImageIngredient = z.infer<typeof ImageIngredient>;
//# sourceMappingURL=ImageIngredient.d.ts.map