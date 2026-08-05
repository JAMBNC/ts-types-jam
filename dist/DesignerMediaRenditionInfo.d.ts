import { z } from "zod";
declare const _DesignerMediaRenditionInfo: z.ZodUnion<readonly [import("./DesignerMediaRenditionColorInfo.js").DesignerMediaRenditionColorInfoSchema, import("./DesignerMediaRenditionFoilInfo.js").DesignerMediaRenditionFoilInfoSchema]>;
type _DesignerMediaRenditionInfoSchema = typeof _DesignerMediaRenditionInfo;
export interface DesignerMediaRenditionInfoSchema extends _DesignerMediaRenditionInfoSchema {
}
/**The rendition data returned on a successful media rendition request.*/
export declare const DesignerMediaRenditionInfo: DesignerMediaRenditionInfoSchema;
export type DesignerMediaRenditionInfo = z.infer<typeof DesignerMediaRenditionInfo>;
export {};
//# sourceMappingURL=DesignerMediaRenditionInfo.d.ts.map