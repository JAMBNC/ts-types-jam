import { z } from "zod";
/**An ingredient that holds a generic data payload such as textures or backgrounds.*/
export declare const DataIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"data">;
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
    printTextureCompositeOperation: z.ZodEnum<{
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
    data: z.ZodObject<{
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
        type: z.ZodString;
        viewLayer: z.ZodString;
        layerName: z.ZodString;
        isTextureMask: z.ZodBoolean;
        tag: z.ZodString;
        path: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DataIngredient = z.infer<typeof DataIngredient>;
//# sourceMappingURL=DataIngredient.d.ts.map