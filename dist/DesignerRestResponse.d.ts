import { z } from "zod";
/**A union of all possible Designer REST API response types.*/
export declare const DesignerRestResponse: z.ZodUnion<readonly [z.ZodObject<{
    page: z.ZodNumber;
    hasNextPage: z.ZodBoolean;
    images: z.ZodArray<z.ZodObject<{
        mediaId: z.ZodString;
        thumbnailUrl: z.ZodString;
        label: z.ZodString;
        isVector: z.ZodBoolean;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strict>]>, z.ZodObject<{
    status: z.ZodBoolean;
    designId: z.ZodString;
}, z.core.$strict>]>;
export type DesignerRestResponse = z.infer<typeof DesignerRestResponse>;
//# sourceMappingURL=DesignerRestResponse.d.ts.map