import { z } from "zod";
/**A single media item in the user's gallery.*/
export declare const DesignerMediaEntry: z.ZodObject<{
    mediaId: z.ZodString;
    thumbnailUrl: z.ZodString;
    label: z.ZodString;
    isVector: z.ZodBoolean;
}, z.core.$strict>;
export type DesignerMediaEntry = z.infer<typeof DesignerMediaEntry>;
//# sourceMappingURL=DesignerMediaEntry.d.ts.map