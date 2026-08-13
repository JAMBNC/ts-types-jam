import { z } from "zod";
declare const _DesignerMediaRenditionBaseRequestData: z.ZodObject<{
    process: import("./Process.js").ProcessSchema;
}, z.core.$strict>;
type _DesignerMediaRenditionBaseRequestDataSchema = typeof _DesignerMediaRenditionBaseRequestData;
export interface DesignerMediaRenditionBaseRequestDataSchema extends _DesignerMediaRenditionBaseRequestDataSchema {
}
/**The request body data for the media rendition endpoint for basic requests that require only process*/
export declare const DesignerMediaRenditionBaseRequestData: DesignerMediaRenditionBaseRequestDataSchema;
export type DesignerMediaRenditionBaseRequestData = z.infer<typeof DesignerMediaRenditionBaseRequestData>;
export {};
//# sourceMappingURL=DesignerMediaRenditionBaseRequestData.d.ts.map