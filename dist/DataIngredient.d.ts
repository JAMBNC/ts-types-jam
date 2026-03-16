import { z } from "zod";
/**An ingredient that holds a generic data payload such as textures or backgrounds.*/
export declare const DataIngredient: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodLiteral<"data">;
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
    data: z.ZodObject<{
        width: z.ZodObject<{
            unit: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            value: z.ZodNumber;
        }, z.core.$loose>;
        height: z.ZodObject<{
            unit: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            value: z.ZodNumber;
        }, z.core.$loose>;
        x: z.ZodObject<{
            unit: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            value: z.ZodNumber;
        }, z.core.$loose>;
        y: z.ZodObject<{
            unit: z.ZodEnum<{
                in: "in";
                mm: "mm";
                px: "px";
                pt: "pt";
            }>;
            value: z.ZodNumber;
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