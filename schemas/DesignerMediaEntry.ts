import { z } from "zod";

const _DesignerMediaEntry = z
  .object({
    /**The unique identifier for the media item.*/
    mediaId: z.string().describe("The unique identifier for the media item."),
    /**The URL of the thumbnail image for the media item.*/
    thumbnailUrl: z
      .string()
      .url()
      .describe("The URL of the thumbnail image for the media item."),
    /**The display label/filename for the media item.*/
    label: z
      .string()
      .describe("The display label/filename for the media item."),
    /**Whether the media item is a vector graphic.*/
    isVector: z
      .boolean()
      .describe("Whether the media item is a vector graphic."),
  })
  .strict()
  .describe("A single media item in the user's gallery.");
type _DesignerMediaEntrySchema = typeof _DesignerMediaEntry;
export interface DesignerMediaEntrySchema extends _DesignerMediaEntrySchema {}
/**A single media item in the user's gallery.*/
export const DesignerMediaEntry: DesignerMediaEntrySchema = _DesignerMediaEntry;
export type DesignerMediaEntry = z.infer<typeof DesignerMediaEntry>;
