import { z } from "zod";
/**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
export declare const RenditionChannel: z.ZodObject<{
    source: z.ZodObject<{
        colorspace: z.ZodString;
        dpi: z.ZodNumber;
        type: z.ZodString;
        height: z.ZodNumber;
        width: z.ZodNumber;
        size: z.ZodString;
        url: z.ZodString;
    }, z.core.$strict>;
    url: z.ZodString;
}, z.core.$strict>;
export type RenditionChannel = z.infer<typeof RenditionChannel>;
//# sourceMappingURL=RenditionChannel.d.ts.map