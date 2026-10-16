import { z } from "zod";
declare const _DesignerSheetUploadProblem: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
}, z.core.$strict>;
type _DesignerSheetUploadProblemSchema = typeof _DesignerSheetUploadProblem;
export interface DesignerSheetUploadProblemSchema extends _DesignerSheetUploadProblemSchema {
}
/**Something in the uploaded sheet that could not be placed as it was drawn.*/
export declare const DesignerSheetUploadProblem: DesignerSheetUploadProblemSchema;
export type DesignerSheetUploadProblem = z.infer<typeof DesignerSheetUploadProblem>;
export {};
//# sourceMappingURL=DesignerSheetUploadProblem.d.ts.map