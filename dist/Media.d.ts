import { z } from "zod/v4";
export declare const Media: z.ZodObject<{
    altText: z.ZodOptional<z.ZodString>;
    mediaType: z.ZodEnum<{
        IMAGE: "IMAGE";
        VIDEO: "VIDEO";
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
export type Media = z.infer<typeof Media>;
//# sourceMappingURL=Media.d.ts.map