import { z } from "zod";
declare const _DesignerMediaRenditionPlateInfo: z.ZodIntersection<z.ZodObject<{
    bw: import("./RenditionChannel.js").RenditionChannelSchema;
    cmyk: import("./RenditionChannel.js").RenditionChannelSchema;
    type: z.ZodEnum<{
        whiteInk: "whiteInk";
        ink: "ink";
    }>;
}, z.core.$loose>, z.ZodObject<{
    isVector: z.ZodBoolean;
    mediaId: z.ZodString;
    guest: z.ZodBoolean;
}, z.core.$loose>>;
type _DesignerMediaRenditionPlateInfoSchema = typeof _DesignerMediaRenditionPlateInfo;
export interface DesignerMediaRenditionPlateInfoSchema extends _DesignerMediaRenditionPlateInfoSchema {
}
/**The rendition of a vector printed on one named spot plate: an ink the customer chose, or white ink.*/
export declare const DesignerMediaRenditionPlateInfo: DesignerMediaRenditionPlateInfoSchema;
export type DesignerMediaRenditionPlateInfo = z.infer<typeof DesignerMediaRenditionPlateInfo>;
export {};
//# sourceMappingURL=DesignerMediaRenditionPlateInfo.d.ts.map