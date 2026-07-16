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
        amazon: "amazon";
        carousel: "carousel";
        insideView: "insideView";
        other: "other";
        primary: "primary";
        small: "small";
        swatch: "swatch";
        thumbnail: "thumbnail";
        yourLogoHere: "yourLogoHere";
    }>>>;
    url: z.ZodString;
}, z.core.$loose>;
export type Media = z.infer<typeof Media>;
//# sourceMappingURL=Media.d.ts.map