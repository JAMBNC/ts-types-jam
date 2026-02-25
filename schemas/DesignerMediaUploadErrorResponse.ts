import { z } from "zod";

/**The response from the media upload endpoint when the upload fails.*/
export const DesignerMediaUploadErrorResponse = z
  .object({
    success: z.literal(false),
    /**A message describing why the upload failed.*/
    error: z.string().describe("A message describing why the upload failed."),
  })
  .strict()
  .describe(
    "The response from the media upload endpoint when the upload fails.",
  );
export type DesignerMediaUploadErrorResponse = z.infer<
  typeof DesignerMediaUploadErrorResponse
>;
