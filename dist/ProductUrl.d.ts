import { z } from "zod";
export declare const ProductUrl: z.ZodObject<{
    metaData: z.ZodOptional<z.ZodObject<{
        creativeEngine: z.ZodOptional<z.ZodEnum<{
            chili: "chili";
            alchemy: "alchemy";
        }>>;
        designer: z.ZodOptional<z.ZodEnum<{
            hermes: "hermes";
            chili: "chili";
            luma: "luma";
        }>>;
    }, z.core.$loose>>;
    url: z.ZodOptional<z.ZodString>;
    urlType: z.ZodOptional<z.ZodEnum<{
        product: "product";
        yourLogoHere: "yourLogoHere";
        customProduct: "customProduct";
    }>>;
}, z.core.$loose>;
export type ProductUrl = z.infer<typeof ProductUrl>;
//# sourceMappingURL=ProductUrl.d.ts.map