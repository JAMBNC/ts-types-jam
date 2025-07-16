import { z } from "zod/v4";
export declare const ProductMedia: z.ZodObject<{
    altText: z.ZodOptional<z.ZodString>;
    mediaType: z.ZodEnum<{
        Image: "Image";
        Video: "Video";
    }>;
    tags: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        PRIMARY: "PRIMARY";
        SMALL: "SMALL";
        THUMBNAIL: "THUMBNAIL";
        YOUR_LOGO_HERE: "YOUR_LOGO_HERE";
        INSIDE_VIEW: "INSIDE_VIEW";
        SWATCH: "SWATCH";
        AMAZON: "AMAZON";
        CAROUSEL: "CAROUSEL";
        OTHER: "OTHER";
    }>>>;
    url: z.ZodString;
}, z.core.$strip>;
export type ProductMedia = z.infer<typeof ProductMedia>;
//# sourceMappingURL=ProductMedia.d.ts.map