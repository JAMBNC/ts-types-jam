import { z } from "zod";
declare const _DesignerMediaUploadRequest: z.ZodObject<{
    data: z.ZodObject<{
        label: z.ZodString;
        mediaBase64: z.ZodString;
        contentType: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerMediaUploadRequestSchema = typeof _DesignerMediaUploadRequest;
export interface DesignerMediaUploadRequestSchema extends _DesignerMediaUploadRequestSchema {
}
/**The request body for the media upload endpoint.*/
export declare const DesignerMediaUploadRequest: DesignerMediaUploadRequestSchema;
export type DesignerMediaUploadRequest = z.infer<typeof DesignerMediaUploadRequest>;
export {};
//# sourceMappingURL=DesignerMediaUploadRequest.d.ts.map