import { z } from "zod";
export declare const ProductMedia: z.ZodObject<{
    altText: z.ZodOptional<z.ZodString>;
    mediaType: z.ZodEnum<{
        Image: "Image";
        Video: "Video";
    }>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    url: z.ZodString;
}, z.core.$strip>;
export type ProductMedia = z.infer<typeof ProductMedia>;
//# sourceMappingURL=ProductMedia.d.ts.map