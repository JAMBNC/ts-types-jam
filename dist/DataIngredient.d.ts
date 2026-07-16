import { z } from "zod";
/**An ingredient that holds a generic data payload such as textures or backgrounds.*/
export declare const DataIngredient: z.ZodObject<{
    type: z.ZodLiteral<"data">;
    data: z.ZodObject<{
        height: z.ZodOptional<z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>>;
        layerName: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        tag: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>>;
        x: z.ZodOptional<z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>>;
        y: z.ZodOptional<z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>>;
        additionalProperties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$loose>;
    dropshadow: z.ZodOptional<z.ZodBoolean>;
    editable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    opacity: z.ZodNumber;
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
export type DataIngredient = z.infer<typeof DataIngredient>;
//# sourceMappingURL=DataIngredient.d.ts.map