import { z } from "zod";
declare const _DesignerMediaRenditionFoilRequestData: z.ZodObject<{
    process: z.ZodLiteral<"foil">;
    color: z.ZodString;
}, z.core.$strict>;
type _DesignerMediaRenditionFoilRequestDataSchema = typeof _DesignerMediaRenditionFoilRequestData;
export interface DesignerMediaRenditionFoilRequestDataSchema extends _DesignerMediaRenditionFoilRequestDataSchema {
}
/**The request body data for the media rendition endpoint for foil specific requests*/
export declare const DesignerMediaRenditionFoilRequestData: DesignerMediaRenditionFoilRequestDataSchema;
export type DesignerMediaRenditionFoilRequestData = z.infer<typeof DesignerMediaRenditionFoilRequestData>;
export {};
//# sourceMappingURL=DesignerMediaRenditionFoilRequestData.d.ts.map