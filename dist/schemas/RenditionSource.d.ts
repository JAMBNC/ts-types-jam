import { z } from "zod";
/**Metadata about the source file for a rendition.*/
export declare const RenditionSource: z.ZodObject<{
    colorspace: z.ZodString;
    dpi: z.ZodNumber;
    type: z.ZodString;
    height: z.ZodNumber;
    width: z.ZodNumber;
    size: z.ZodString;
    url: z.ZodString;
}, z.core.$strict>;
export type RenditionSource = z.infer<typeof RenditionSource>;
//# sourceMappingURL=RenditionSource.d.ts.map