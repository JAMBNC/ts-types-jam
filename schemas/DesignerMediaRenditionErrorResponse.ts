import { z } from "zod";

/**The response from the media rendition endpoint when the rendition fails.*/
export const DesignerMediaRenditionErrorResponse = z
  .object({
    success: z.literal(false),
    /**A message describing why the rendition failed.*/
    error: z
      .string()
      .describe("A message describing why the rendition failed."),
  })
  .strict()
  .describe(
    "The response from the media rendition endpoint when the rendition fails.",
  );
export type DesignerMediaRenditionErrorResponse = z.infer<
  typeof DesignerMediaRenditionErrorResponse
>;
