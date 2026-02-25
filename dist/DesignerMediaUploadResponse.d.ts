import { z } from "zod";
/**The response from the media upload endpoint.*/
export declare const DesignerMediaUploadResponse: z.ZodUnion<readonly [z.ZodObject<{
    success: z.ZodLiteral<true>;
    mediaInfo: z.ZodObject<{
        mediaId: z.ZodString;
        thumbnailUrl: z.ZodString;
        label: z.ZodString;
        isVector: z.ZodBoolean;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    success: z.ZodLiteral<false>;
    error: z.ZodString;
}, z.core.$strict>]>;
export type DesignerMediaUploadResponse = z.infer<typeof DesignerMediaUploadResponse>;
//# sourceMappingURL=DesignerMediaUploadResponse.d.ts.map