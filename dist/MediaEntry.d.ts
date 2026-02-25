import { z } from "zod";
/**A single media item in the user's gallery.*/
export declare const MediaEntry: z.ZodObject<{
    mediaId: z.ZodString;
    thumbnailUrl: z.ZodString;
    label: z.ZodString;
    isVector: z.ZodBoolean;
}, z.core.$strict>;
export type MediaEntry = z.infer<typeof MediaEntry>;
//# sourceMappingURL=MediaEntry.d.ts.map