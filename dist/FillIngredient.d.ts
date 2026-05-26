import { z } from "zod";
/**An ingredient that fills a rectangular area with a solid color.*/
export declare const FillIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"fill">;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    workingTextureCompositeOperation: z.ZodEnum<{
        "source-over": "source-over";
        "source-in": "source-in";
        "source-out": "source-out";
        "source-atop": "source-atop";
        "destination-over": "destination-over";
        "destination-in": "destination-in";
        "destination-out": "destination-out";
        "destination-atop": "destination-atop";
        lighter: "lighter";
        copy: "copy";
        xor: "xor";
        multiply: "multiply";
        screen: "screen";
        overlay: "overlay";
        darken: "darken";
        lighten: "lighten";
        "color-dodge": "color-dodge";
        "color-burn": "color-burn";
        "hard-light": "hard-light";
        "soft-light": "soft-light";
        difference: "difference";
        exclusion: "exclusion";
        hue: "hue";
        saturation: "saturation";
        color: "color";
        luminosity: "luminosity";
    }>;
    outputTextureCompositeOperation: z.ZodEnum<{
        "source-over": "source-over";
        "source-in": "source-in";
        "source-out": "source-out";
        "source-atop": "source-atop";
        "destination-over": "destination-over";
        "destination-in": "destination-in";
        "destination-out": "destination-out";
        "destination-atop": "destination-atop";
        lighter: "lighter";
        copy: "copy";
        xor: "xor";
        multiply: "multiply";
        screen: "screen";
        overlay: "overlay";
        darken: "darken";
        lighten: "lighten";
        "color-dodge": "color-dodge";
        "color-burn": "color-burn";
        "hard-light": "hard-light";
        "soft-light": "soft-light";
        difference: "difference";
        exclusion: "exclusion";
        hue: "hue";
        saturation: "saturation";
        color: "color";
        luminosity: "luminosity";
    }>;
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
        width: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        height: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type FillIngredient = z.infer<typeof FillIngredient>;
//# sourceMappingURL=FillIngredient.d.ts.map