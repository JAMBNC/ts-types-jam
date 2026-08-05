import { z } from "zod";
declare const _Media: z.ZodObject<{
    altText: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    mediaType: import("./MediaType.js").MediaTypeSchema;
    previewUrl: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<import("./Tag.js").TagSchema>>;
    url: z.ZodString;
}, z.core.$loose>;
type _MediaSchema = typeof _Media;
export interface MediaSchema extends _MediaSchema {
}
export declare const Media: MediaSchema;
export type Media = z.infer<typeof Media>;
export {};
//# sourceMappingURL=Media.d.ts.map