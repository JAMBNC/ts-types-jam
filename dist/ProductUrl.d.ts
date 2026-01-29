import { z } from "zod";
export declare const ProductUrl: z.ZodObject<{
    metaData: z.ZodOptional<z.ZodObject<{
        creativeEngine: z.ZodOptional<z.ZodEnum<{
            chili: "chili";
            alchemy: "alchemy";
        }>>;
        designer: z.ZodOptional<z.ZodEnum<{
            chili: "chili";
            luma: "luma";
            addrLogo: "addrLogo";
        }>>;
    }, z.core.$strip>>;
    url: z.ZodOptional<z.ZodString>;
    urlType: z.ZodOptional<z.ZodEnum<{
        product: "product";
        yourLogoHere: "yourLogoHere";
        customProduct: "customProduct";
    }>>;
}, z.core.$strip>;
export type ProductUrl = z.infer<typeof ProductUrl>;
//# sourceMappingURL=ProductUrl.d.ts.map