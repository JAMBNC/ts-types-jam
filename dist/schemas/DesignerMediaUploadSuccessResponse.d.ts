import { z } from "zod";
/**The response from the media upload endpoint when the upload succeeds.*/
export declare const DesignerMediaUploadSuccessResponse: z.ZodObject<{
    success: z.ZodLiteral<true>;
    mediaInfo: z.ZodObject<{
        mediaId: z.ZodString;
        thumbnailUrl: z.ZodString;
        label: z.ZodString;
        isVector: z.ZodBoolean;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerMediaUploadSuccessResponse = z.infer<typeof DesignerMediaUploadSuccessResponse>;
//# sourceMappingURL=DesignerMediaUploadSuccessResponse.d.ts.map