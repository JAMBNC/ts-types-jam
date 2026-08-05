import { z } from "zod";
declare const _RenditionChannel: z.ZodObject<{
    source: import("./RenditionSource.js").RenditionSourceSchema;
    url: z.ZodString;
}, z.core.$strict>;
type _RenditionChannelSchema = typeof _RenditionChannel;
export interface RenditionChannelSchema extends _RenditionChannelSchema {
}
/**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
export declare const RenditionChannel: RenditionChannelSchema;
export type RenditionChannel = z.infer<typeof RenditionChannel>;
export {};
//# sourceMappingURL=RenditionChannel.d.ts.map