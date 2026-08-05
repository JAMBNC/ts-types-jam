import { z } from "zod";
declare const _RenditionSource: z.ZodObject<{
    colorspace: z.ZodString;
    dpi: z.ZodNumber;
    type: z.ZodString;
    height: z.ZodNumber;
    width: z.ZodNumber;
    size: z.ZodString;
    url: z.ZodString;
}, z.core.$strict>;
type _RenditionSourceSchema = typeof _RenditionSource;
export interface RenditionSourceSchema extends _RenditionSourceSchema {
}
/**Metadata about the source file for a rendition.*/
export declare const RenditionSource: RenditionSourceSchema;
export type RenditionSource = z.infer<typeof RenditionSource>;
export {};
//# sourceMappingURL=RenditionSource.d.ts.map