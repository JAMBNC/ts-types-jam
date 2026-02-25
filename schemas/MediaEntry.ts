import { z } from "zod";

/**A single media item in the user's gallery.*/
export const MediaEntry = z
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
export type MediaEntry = z.infer<typeof MediaEntry>;
