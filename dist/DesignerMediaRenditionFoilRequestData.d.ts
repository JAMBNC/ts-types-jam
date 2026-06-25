import { z } from "zod";
/**The request body data for the media rendition endpoint for foil specific requests*/
export declare const DesignerMediaRenditionFoilRequestData: z.ZodObject<{
    process: z.ZodLiteral<"foil">;
    color: z.ZodString;
}, z.core.$strict>;
export type DesignerMediaRenditionFoilRequestData = z.infer<typeof DesignerMediaRenditionFoilRequestData>;
//# sourceMappingURL=DesignerMediaRenditionFoilRequestData.d.ts.map