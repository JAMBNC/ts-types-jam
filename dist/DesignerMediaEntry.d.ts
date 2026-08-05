import { z } from "zod";
declare const _DesignerMediaEntry: z.ZodObject<{
    mediaId: z.ZodString;
    thumbnailUrl: z.ZodString;
    label: z.ZodString;
    isVector: z.ZodBoolean;
}, z.core.$strict>;
type _DesignerMediaEntrySchema = typeof _DesignerMediaEntry;
export interface DesignerMediaEntrySchema extends _DesignerMediaEntrySchema {
}
/**A single media item in the user's gallery.*/
export declare const DesignerMediaEntry: DesignerMediaEntrySchema;
export type DesignerMediaEntry = z.infer<typeof DesignerMediaEntry>;
export {};
//# sourceMappingURL=DesignerMediaEntry.d.ts.map