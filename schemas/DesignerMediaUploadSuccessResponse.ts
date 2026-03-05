import { z } from "zod";
import { DesignerMediaEntry } from "./DesignerMediaEntry.js";

/**The response from the media upload endpoint when the upload succeeds.*/
export const DesignerMediaUploadSuccessResponse = z
  .object({
    success: z.literal(true),
    /**A single media item in the user's gallery.*/
    mediaInfo: DesignerMediaEntry,
  })
  .strict()
  .describe(
    "The response from the media upload endpoint when the upload succeeds.",
  );
export type DesignerMediaUploadSuccessResponse = z.infer<
  typeof DesignerMediaUploadSuccessResponse
>;
