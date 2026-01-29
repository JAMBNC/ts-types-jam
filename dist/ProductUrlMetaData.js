import { z } from "zod";
export const ProductUrlMetaData = z.object({
    creativeEngine: z.enum(["chili", "alchemy"]).optional(),
    designer: z.enum(["chili", "luma", "addrLogo"]).optional(),
});
