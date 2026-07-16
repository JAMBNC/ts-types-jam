import { z } from "zod";
export declare const ProductUrl: z.ZodObject<{
    metaData: z.ZodOptional<z.ZodObject<{
        creativeEngine: z.ZodOptional<z.ZodEnum<{
            alchemy: "alchemy";
            chili: "chili";
        }>>;
        designer: z.ZodOptional<z.ZodEnum<{
            chili: "chili";
            hermes: "hermes";
            luma: "luma";
        }>>;
    }, z.core.$loose>>;
    url: z.ZodOptional<z.ZodString>;
    urlType: z.ZodOptional<z.ZodEnum<{
        customProduct: "customProduct";
        product: "product";
        yourLogoHere: "yourLogoHere";
    }>>;
}, z.core.$loose>;
export type ProductUrl = z.infer<typeof ProductUrl>;
//# sourceMappingURL=ProductUrl.d.ts.map