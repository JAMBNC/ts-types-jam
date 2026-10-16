import { z } from "zod";
declare const _DesignerSheetUploadErrorResponse: z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
    problems: z.ZodArray<import("./DesignerSheetUploadProblem.js").DesignerSheetUploadProblemSchema>;
}, z.core.$strict>;
type _DesignerSheetUploadErrorResponseSchema = typeof _DesignerSheetUploadErrorResponse;
export interface DesignerSheetUploadErrorResponseSchema extends _DesignerSheetUploadErrorResponseSchema {
}
/**Why nothing was placed.*/
export declare const DesignerSheetUploadErrorResponse: DesignerSheetUploadErrorResponseSchema;
export type DesignerSheetUploadErrorResponse = z.infer<typeof DesignerSheetUploadErrorResponse>;
export {};
//# sourceMappingURL=DesignerSheetUploadErrorResponse.d.ts.map