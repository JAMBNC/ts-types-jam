import { z } from "zod";
declare const _DesignerMediaUploadSuccessResponse: z.ZodObject<{
    success: z.ZodLiteral<true>;
    mediaInfo: import("./DesignerMediaEntry.js").DesignerMediaEntrySchema;
}, z.core.$strict>;
type _DesignerMediaUploadSuccessResponseSchema = typeof _DesignerMediaUploadSuccessResponse;
export interface DesignerMediaUploadSuccessResponseSchema extends _DesignerMediaUploadSuccessResponseSchema {
}
/**The response from the media upload endpoint when the upload succeeds.*/
export declare const DesignerMediaUploadSuccessResponse: DesignerMediaUploadSuccessResponseSchema;
export type DesignerMediaUploadSuccessResponse = z.infer<typeof DesignerMediaUploadSuccessResponse>;
export {};
//# sourceMappingURL=DesignerMediaUploadSuccessResponse.d.ts.map