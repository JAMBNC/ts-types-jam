import { z } from "zod";
/**Ingredient for coatings that cover an entire page.*/
export declare const CoatingIngredient: z.ZodObject<{
    id: z.ZodString;
    rect: z.ZodOptional<z.ZodObject<{
        height: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        width: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        x: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
        y: z.ZodObject<{
            u: z.ZodEnum<{
                in: "in";
                mm: "mm";
                pt: "pt";
                px: "px";
            }>;
            v: z.ZodNumber;
        }, z.core.$loose>;
    }, z.core.$strict>>;
    type: z.ZodLiteral<"coating">;
    editable: z.ZodOptional<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    code: z.ZodString;
    opacity: z.ZodOptional<z.ZodNumber>;
    texture: z.ZodUnion<readonly [z.ZodObject<{
        hex: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        src: z.ZodString;
    }, z.core.$strict>]>;
    zIndex: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export type CoatingIngredient = z.infer<typeof CoatingIngredient>;
//# sourceMappingURL=CoatingIngredient.d.ts.map