import { z } from "zod";
export declare const Badge: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    code: z.ZodString;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        context: z.ZodEnum<{
            product_detail: "product_detail";
            product_listing: "product_listing";
        }>;
        position: z.ZodEnum<{
            bottomLeft: "bottomLeft";
            bottomRight: "bottomRight";
            topLeft: "topLeft";
            topRight: "topRight";
        }>;
        url: z.ZodString;
    }, z.core.$loose>>>;
    priority: z.ZodOptional<z.ZodNumber>;
}, z.core.$loose>;
export type Badge = z.infer<typeof Badge>;
//# sourceMappingURL=Badge.d.ts.map