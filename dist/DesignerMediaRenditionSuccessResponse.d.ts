import { z } from "zod";
declare const _DesignerMediaRenditionSuccessResponse: z.ZodObject<{
    success: z.ZodLiteral<true>;
    renditionInfo: import("./DesignerMediaRenditionInfo.js").DesignerMediaRenditionInfoSchema;
}, z.core.$strict>;
type _DesignerMediaRenditionSuccessResponseSchema = typeof _DesignerMediaRenditionSuccessResponse;
export interface DesignerMediaRenditionSuccessResponseSchema extends _DesignerMediaRenditionSuccessResponseSchema {
}
/**The response from the media rendition endpoint when the rendition succeeds.*/
export declare const DesignerMediaRenditionSuccessResponse: DesignerMediaRenditionSuccessResponseSchema;
export type DesignerMediaRenditionSuccessResponse = z.infer<typeof DesignerMediaRenditionSuccessResponse>;
export {};
//# sourceMappingURL=DesignerMediaRenditionSuccessResponse.d.ts.map