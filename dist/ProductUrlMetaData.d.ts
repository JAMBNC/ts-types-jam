import { z } from "zod";
export declare const ProductUrlMetaData: z.ZodObject<{
    creativeEngine: z.ZodOptional<z.ZodEnum<{
        alchemy: "alchemy";
        chili: "chili";
    }>>;
    designer: z.ZodOptional<z.ZodEnum<{
        chili: "chili";
        hermes: "hermes";
        luma: "luma";
    }>>;
}, z.core.$loose>;
export type ProductUrlMetaData = z.infer<typeof ProductUrlMetaData>;
//# sourceMappingURL=ProductUrlMetaData.d.ts.map