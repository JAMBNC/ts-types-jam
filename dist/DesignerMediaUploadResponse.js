import { z } from "zod";
import { MediaEntry } from "./MediaEntry.js";
/**The response from the media upload endpoint.*/
export const DesignerMediaUploadResponse = z
    .object({
    /**Whether the upload was successful.*/
    success: z.boolean().describe("Whether the upload was successful."),
    /**A single media item in the user's gallery.*/
    mediaInfo: MediaEntry,
})
    .strict()
    .describe("The response from the media upload endpoint.");
