import { z } from "zod";
export declare const BadgeImage: z.ZodObject<{
    context: z.ZodEnum<{
        product_detail: "product_detail";
        product_listing: "product_listing";
    }>;
    position: z.ZodEnum<{
        topRight: "topRight";
        bottomRight: "bottomRight";
        bottomLeft: "bottomLeft";
        topLeft: "topLeft";
    }>;
    url: z.ZodString;
}, z.core.$loose>;
export type BadgeImage = z.infer<typeof BadgeImage>;
//# sourceMappingURL=BadgeImage.d.ts.map