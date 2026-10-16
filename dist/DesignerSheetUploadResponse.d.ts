import { z } from "zod";
declare const _DesignerSheetUploadResponse: z.ZodUnion<readonly [import("./DesignerSheetUploadSuccessResponse.js").DesignerSheetUploadSuccessResponseSchema, import("./DesignerSheetUploadErrorResponse.js").DesignerSheetUploadErrorResponseSchema]>;
type _DesignerSheetUploadResponseSchema = typeof _DesignerSheetUploadResponse;
export interface DesignerSheetUploadResponseSchema extends _DesignerSheetUploadResponseSchema {
}
export declare const DesignerSheetUploadResponse: DesignerSheetUploadResponseSchema;
export type DesignerSheetUploadResponse = z.infer<typeof DesignerSheetUploadResponse>;
export {};
//# sourceMappingURL=DesignerSheetUploadResponse.d.ts.map