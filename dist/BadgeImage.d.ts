import { z } from "zod/v4";
export declare const BadgeImage: z.ZodObject<{
    context: z.ZodEnum<{
        product_detail: "product_detail";
        product_listing: "product_listing";
    }>;
    url: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type BadgeImage = z.infer<typeof BadgeImage>;
//# sourceMappingURL=BadgeImage.d.ts.map