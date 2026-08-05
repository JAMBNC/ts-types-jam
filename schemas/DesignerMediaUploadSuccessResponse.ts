import { z } from "zod";
import { DesignerMediaEntry } from "./DesignerMediaEntry.js";

const _DesignerMediaUploadSuccessResponse = z
  .object({
    success: z.literal(true),
    /**A single media item in the user's gallery.*/
    mediaInfo: DesignerMediaEntry,
  })
  .strict()
  .describe(
    "The response from the media upload endpoint when the upload succeeds.",
  );
type _DesignerMediaUploadSuccessResponseSchema =
  typeof _DesignerMediaUploadSuccessResponse;
export interface DesignerMediaUploadSuccessResponseSchema extends _DesignerMediaUploadSuccessResponseSchema {}
/**The response from the media upload endpoint when the upload succeeds.*/
export const DesignerMediaUploadSuccessResponse: DesignerMediaUploadSuccessResponseSchema =
  _DesignerMediaUploadSuccessResponse;
export type DesignerMediaUploadSuccessResponse = z.infer<
  typeof DesignerMediaUploadSuccessResponse
>;
