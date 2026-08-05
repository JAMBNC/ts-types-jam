import { z } from "zod";
declare const _DesignerMediaRenditionErrorResponse: z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>;
type _DesignerMediaRenditionErrorResponseSchema = typeof _DesignerMediaRenditionErrorResponse;
export interface DesignerMediaRenditionErrorResponseSchema extends _DesignerMediaRenditionErrorResponseSchema {
}
/**The response from the media rendition endpoint when the rendition fails.*/
export declare const DesignerMediaRenditionErrorResponse: DesignerMediaRenditionErrorResponseSchema;
export type DesignerMediaRenditionErrorResponse = z.infer<typeof DesignerMediaRenditionErrorResponse>;
export {};
//# sourceMappingURL=DesignerMediaRenditionErrorResponse.d.ts.map