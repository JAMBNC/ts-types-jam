import { z } from "zod";
/**The response from the media rendition endpoint when the rendition fails.*/
export declare const DesignerMediaRenditionErrorResponse: z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>;
export type DesignerMediaRenditionErrorResponse = z.infer<typeof DesignerMediaRenditionErrorResponse>;
//# sourceMappingURL=DesignerMediaRenditionErrorResponse.d.ts.map