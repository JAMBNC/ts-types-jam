import { z } from "zod";
const _DesignerMediaRenditionErrorResponse = z
    .object({
    success: z.literal(false),
    /**A message describing why the rendition failed.*/
    error: z
        .string()
        .describe("A message describing why the rendition failed."),
})
    .strict()
    .describe("The response from the media rendition endpoint when the rendition fails.");
/**The response from the media rendition endpoint when the rendition fails.*/
export const DesignerMediaRenditionErrorResponse = _DesignerMediaRenditionErrorResponse;
