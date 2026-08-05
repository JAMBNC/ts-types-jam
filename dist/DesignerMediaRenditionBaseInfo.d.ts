import { z } from "zod";
declare const _DesignerMediaRenditionBaseInfo: z.ZodObject<{
    isVector: z.ZodBoolean;
    mediaId: z.ZodString;
    guest: z.ZodBoolean;
}, z.core.$loose>;
type _DesignerMediaRenditionBaseInfoSchema = typeof _DesignerMediaRenditionBaseInfo;
export interface DesignerMediaRenditionBaseInfoSchema extends _DesignerMediaRenditionBaseInfoSchema {
}
/**The shared rendition data returned on a successful media rendition request.*/
export declare const DesignerMediaRenditionBaseInfo: DesignerMediaRenditionBaseInfoSchema;
export type DesignerMediaRenditionBaseInfo = z.infer<typeof DesignerMediaRenditionBaseInfo>;
export {};
//# sourceMappingURL=DesignerMediaRenditionBaseInfo.d.ts.map