import { z } from "zod";
/**The response from the media upload endpoint when the upload fails.*/
export declare const DesignerMediaUploadErrorResponse: z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>;
export type DesignerMediaUploadErrorResponse = z.infer<typeof DesignerMediaUploadErrorResponse>;
//# sourceMappingURL=DesignerMediaUploadErrorResponse.d.ts.map