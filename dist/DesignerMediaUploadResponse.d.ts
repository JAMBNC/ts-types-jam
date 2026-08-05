import { z } from "zod";
declare const _DesignerMediaUploadResponse: z.ZodUnion<readonly [import("./DesignerMediaUploadSuccessResponse.js").DesignerMediaUploadSuccessResponseSchema, import("./DesignerMediaUploadErrorResponse.js").DesignerMediaUploadErrorResponseSchema]>;
type _DesignerMediaUploadResponseSchema = typeof _DesignerMediaUploadResponse;
export interface DesignerMediaUploadResponseSchema extends _DesignerMediaUploadResponseSchema {
}
/**The response from the media upload endpoint.*/
export declare const DesignerMediaUploadResponse: DesignerMediaUploadResponseSchema;
export type DesignerMediaUploadResponse = z.infer<typeof DesignerMediaUploadResponse>;
export {};
//# sourceMappingURL=DesignerMediaUploadResponse.d.ts.map