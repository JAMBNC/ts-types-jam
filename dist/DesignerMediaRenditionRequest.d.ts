import { z } from "zod";
declare const _DesignerMediaRenditionRequest: z.ZodObject<{
    data: z.ZodUnion<readonly [import("./DesignerMediaRenditionBaseRequestData.js").DesignerMediaRenditionBaseRequestDataSchema, import("./DesignerMediaRenditionFoilRequestData.js").DesignerMediaRenditionFoilRequestDataSchema]>;
}, z.core.$strict>;
type _DesignerMediaRenditionRequestSchema = typeof _DesignerMediaRenditionRequest;
export interface DesignerMediaRenditionRequestSchema extends _DesignerMediaRenditionRequestSchema {
}
/**The request body for the media rendition endpoint.*/
export declare const DesignerMediaRenditionRequest: DesignerMediaRenditionRequestSchema;
export type DesignerMediaRenditionRequest = z.infer<typeof DesignerMediaRenditionRequest>;
export {};
//# sourceMappingURL=DesignerMediaRenditionRequest.d.ts.map