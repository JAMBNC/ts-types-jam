import { z } from "zod";
declare const _DesignerMediaRenditionInkRequestData: z.ZodObject<{
    process: z.ZodEnum<{
        offset: "offset";
        digital: "digital";
    }>;
    ink: import("./Color.js").ColorSchema;
}, z.core.$strict>;
type _DesignerMediaRenditionInkRequestDataSchema = typeof _DesignerMediaRenditionInkRequestData;
export interface DesignerMediaRenditionInkRequestDataSchema extends _DesignerMediaRenditionInkRequestDataSchema {
}
/**The request body data for the media rendition endpoint when a vector prints in one chosen ink: the art becomes a single plate named for that ink, the way foil becomes a single foil plate.*/
export declare const DesignerMediaRenditionInkRequestData: DesignerMediaRenditionInkRequestDataSchema;
export type DesignerMediaRenditionInkRequestData = z.infer<typeof DesignerMediaRenditionInkRequestData>;
export {};
//# sourceMappingURL=DesignerMediaRenditionInkRequestData.d.ts.map