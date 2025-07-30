import { z } from "zod/v4";
export declare const Media: z.ZodObject<{
    altText: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    mediaType: z.ZodEnum<{
        Image: "Image";
        Video: "Video";
    }>;
    tags: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        primary: "primary";
        small: "small";
        thumbnail: "thumbnail";
        yourLogoHere: "yourLogoHere";
        insideView: "insideView";
        swatch: "swatch";
        amazon: "amazon";
        carousel: "carousel";
        other: "other";
    }>>>;
    url: z.ZodString;
}, z.core.$strip>;
export type Media = z.infer<typeof Media>;
//# sourceMappingURL=Media.d.ts.map