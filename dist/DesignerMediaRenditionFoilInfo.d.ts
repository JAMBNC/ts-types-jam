import { z } from "zod";
declare const _DesignerMediaRenditionFoilInfo: z.ZodIntersection<z.ZodObject<{
    bw: import("./RenditionChannel.js").RenditionChannelSchema;
    cmyk: import("./RenditionChannel.js").RenditionChannelSchema;
    type: z.ZodLiteral<"foil">;
}, z.core.$loose>, z.ZodObject<{
    isVector: z.ZodBoolean;
    mediaId: z.ZodString;
    guest: z.ZodBoolean;
}, z.core.$loose>>;
type _DesignerMediaRenditionFoilInfoSchema = typeof _DesignerMediaRenditionFoilInfo;
export interface DesignerMediaRenditionFoilInfoSchema extends _DesignerMediaRenditionFoilInfoSchema {
}
/**The color rendition data returned on a successful media rendition request.*/
export declare const DesignerMediaRenditionFoilInfo: DesignerMediaRenditionFoilInfoSchema;
export type DesignerMediaRenditionFoilInfo = z.infer<typeof DesignerMediaRenditionFoilInfo>;
export {};
//# sourceMappingURL=DesignerMediaRenditionFoilInfo.d.ts.map