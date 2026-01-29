import { z } from "zod";
export declare const ProductUrlMetaData: z.ZodObject<{
    creativeEngine: z.ZodOptional<z.ZodEnum<{
        chili: "chili";
        alchemy: "alchemy";
    }>>;
    designer: z.ZodOptional<z.ZodEnum<{
        chili: "chili";
        luma: "luma";
        addrLogo: "addrLogo";
    }>>;
}, z.core.$strip>;
export type ProductUrlMetaData = z.infer<typeof ProductUrlMetaData>;
//# sourceMappingURL=ProductUrlMetaData.d.ts.map