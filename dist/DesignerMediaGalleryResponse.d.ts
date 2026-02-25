import { z } from "zod";
/**The response from the media gallery endpoint.*/
export declare const DesignerMediaGalleryResponse: z.ZodObject<{
    page: z.ZodNumber;
    hasNextPage: z.ZodBoolean;
    images: z.ZodArray<z.ZodObject<{
        mediaId: z.ZodString;
        thumbnailUrl: z.ZodString;
        label: z.ZodString;
        isVector: z.ZodBoolean;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type DesignerMediaGalleryResponse = z.infer<typeof DesignerMediaGalleryResponse>;
//# sourceMappingURL=DesignerMediaGalleryResponse.d.ts.map