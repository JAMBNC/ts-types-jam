import { z } from "zod";
/**The shared rendition data returned on a successful media rendition request.*/
export declare const DesignerMediaRenditionBaseInfo: z.ZodObject<{
    isVector: z.ZodBoolean;
    mediaId: z.ZodString;
    guest: z.ZodBoolean;
}, z.core.$loose>;
export type DesignerMediaRenditionBaseInfo = z.infer<typeof DesignerMediaRenditionBaseInfo>;
//# sourceMappingURL=DesignerMediaRenditionBaseInfo.d.ts.map