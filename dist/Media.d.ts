import { z } from "zod";
export declare const Media: z.ZodObject<{
    altText: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    mediaType: z.ZodEnum<{
        image: "image";
        video: "video";
    }>;
    previewUrl: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        small: "small";
        primary: "primary";
        thumbnail: "thumbnail";
        yourLogoHere: "yourLogoHere";
        insideView: "insideView";
        swatch: "swatch";
        amazon: "amazon";
        carousel: "carousel";
        other: "other";
    }>>>;
    url: z.ZodString;
}, z.core.$loose>;
export type Media = z.infer<typeof Media>;
//# sourceMappingURL=Media.d.ts.map