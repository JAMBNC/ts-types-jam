import { z } from "zod";
declare const _DesignerMediaUploadErrorResponse: z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>;
type _DesignerMediaUploadErrorResponseSchema = typeof _DesignerMediaUploadErrorResponse;
export interface DesignerMediaUploadErrorResponseSchema extends _DesignerMediaUploadErrorResponseSchema {
}
/**The response from the media upload endpoint when the upload fails.*/
export declare const DesignerMediaUploadErrorResponse: DesignerMediaUploadErrorResponseSchema;
export type DesignerMediaUploadErrorResponse = z.infer<typeof DesignerMediaUploadErrorResponse>;
export {};
//# sourceMappingURL=DesignerMediaUploadErrorResponse.d.ts.map