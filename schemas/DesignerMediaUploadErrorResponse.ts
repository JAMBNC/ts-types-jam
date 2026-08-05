import { z } from "zod";

const _DesignerMediaUploadErrorResponse = z
  .object({
    success: z.literal(false),
    /**A message describing why the upload failed.*/
    error: z.string().describe("A message describing why the upload failed."),
  })
  .strict()
  .describe(
    "The response from the media upload endpoint when the upload fails.",
  );
type _DesignerMediaUploadErrorResponseSchema =
  typeof _DesignerMediaUploadErrorResponse;
export interface DesignerMediaUploadErrorResponseSchema extends _DesignerMediaUploadErrorResponseSchema {}
/**The response from the media upload endpoint when the upload fails.*/
export const DesignerMediaUploadErrorResponse: DesignerMediaUploadErrorResponseSchema =
  _DesignerMediaUploadErrorResponse;
export type DesignerMediaUploadErrorResponse = z.infer<
  typeof DesignerMediaUploadErrorResponse
>;
