import { z } from "zod";
export declare const ProductUrlMetaData: z.ZodObject<{
    creativeEngine: z.ZodOptional<z.ZodEnum<{
        chili: "chili";
        alchemy: "alchemy";
    }>>;
    designer: z.ZodOptional<z.ZodEnum<{
        hermes: "hermes";
        chili: "chili";
        luma: "luma";
    }>>;
}, z.core.$loose>;
export type ProductUrlMetaData = z.infer<typeof ProductUrlMetaData>;
//# sourceMappingURL=ProductUrlMetaData.d.ts.map