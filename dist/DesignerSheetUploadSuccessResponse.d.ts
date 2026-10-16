import { z } from "zod";
declare const _DesignerSheetUploadSuccessResponse: z.ZodObject<{
    success: z.ZodLiteral<true>;
    design: import("./DesignState.js").DesignStateSchema;
    placements: z.ZodNumber;
    problems: z.ZodArray<import("./DesignerSheetUploadProblem.js").DesignerSheetUploadProblemSchema>;
}, z.core.$strict>;
type _DesignerSheetUploadSuccessResponseSchema = typeof _DesignerSheetUploadSuccessResponse;
export interface DesignerSheetUploadSuccessResponseSchema extends _DesignerSheetUploadSuccessResponseSchema {
}
/**The design with the sheet's artwork placed on its views, replacing any sheet placed before.*/
export declare const DesignerSheetUploadSuccessResponse: DesignerSheetUploadSuccessResponseSchema;
export type DesignerSheetUploadSuccessResponse = z.infer<typeof DesignerSheetUploadSuccessResponse>;
export {};
//# sourceMappingURL=DesignerSheetUploadSuccessResponse.d.ts.map