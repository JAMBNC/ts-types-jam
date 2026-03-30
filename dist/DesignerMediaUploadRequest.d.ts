import { z } from "zod";
/**The request body for the media upload endpoint.*/
export declare const DesignerMediaUploadRequest: z.ZodObject<{
    data: z.ZodObject<{
        label: z.ZodString;
        mediaBase64: z.ZodString;
        contentType: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerMediaUploadRequest = z.infer<typeof DesignerMediaUploadRequest>;
//# sourceMappingURL=DesignerMediaUploadRequest.d.ts.map