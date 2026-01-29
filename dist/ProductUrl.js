import { z } from "zod";
export const ProductUrl = z.object({
    metaData: z
        .object({
        creativeEngine: z.enum(["chili", "alchemy"]).optional(),
        designer: z.enum(["chili", "luma", "addrLogo"]).optional(),
    })
        .optional(),
    url: z.string().optional(),
    urlType: z.enum(["product", "customProduct", "yourLogoHere"]).optional(),
});
