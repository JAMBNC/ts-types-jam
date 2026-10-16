import { z } from "zod";
declare const _DesignerSheetUploadRequest: z.ZodObject<{
    data: z.ZodObject<{
        uploadToken: z.ZodString;
        sku: z.ZodString;
        design: import("./DesignState.js").DesignStateSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerSheetUploadRequestSchema = typeof _DesignerSheetUploadRequest;
export interface DesignerSheetUploadRequestSchema extends _DesignerSheetUploadRequestSchema {
}
/**Places a whole die-sheet PDF onto a folding design. The PDF was uploaded with the media upload start endpoint, and its upload token names it.*/
export declare const DesignerSheetUploadRequest: DesignerSheetUploadRequestSchema;
export type DesignerSheetUploadRequest = z.infer<typeof DesignerSheetUploadRequest>;
export {};
//# sourceMappingURL=DesignerSheetUploadRequest.d.ts.map