import { z } from "zod";
declare const _DesignerMediaGalleryResponse: z.ZodObject<{
    page: z.ZodNumber;
    hasNextPage: z.ZodBoolean;
    images: z.ZodArray<import("./DesignerMediaEntry.js").DesignerMediaEntrySchema>;
}, z.core.$strict>;
type _DesignerMediaGalleryResponseSchema = typeof _DesignerMediaGalleryResponse;
export interface DesignerMediaGalleryResponseSchema extends _DesignerMediaGalleryResponseSchema {
}
/**The response from the media gallery endpoint.*/
export declare const DesignerMediaGalleryResponse: DesignerMediaGalleryResponseSchema;
export type DesignerMediaGalleryResponse = z.infer<typeof DesignerMediaGalleryResponse>;
export {};
//# sourceMappingURL=DesignerMediaGalleryResponse.d.ts.map