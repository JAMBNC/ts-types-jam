import { z } from "zod/v4";
export declare const Badge: z.ZodObject<{
    code: z.ZodString;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        context: z.ZodEnum<{
            product_detail: "product_detail";
            product_listing: "product_listing";
        }>;
        url: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    priority: z.ZodOptional<z.ZodNumber>;
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Badge = z.infer<typeof Badge>;
//# sourceMappingURL=Badge.d.ts.map