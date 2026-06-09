import { z } from "zod";
/**A page in the design containing ordered references to ingredients.*/
export declare const Page: z.ZodObject<{
    id: z.ZodString;
    ingredientsOrdered: z.ZodArray<z.ZodString>;
    coatings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        identifier: z.ZodOptional<z.ZodString>;
        rect: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type Page = z.infer<typeof Page>;
//# sourceMappingURL=Page.d.ts.map