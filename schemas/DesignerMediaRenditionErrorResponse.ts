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
  .describe(
    "The response from the media rendition endpoint when the rendition fails.",
  );
type _DesignerMediaRenditionErrorResponseSchema =
  typeof _DesignerMediaRenditionErrorResponse;
export interface DesignerMediaRenditionErrorResponseSchema extends _DesignerMediaRenditionErrorResponseSchema {}
/**The response from the media rendition endpoint when the rendition fails.*/
export const DesignerMediaRenditionErrorResponse: DesignerMediaRenditionErrorResponseSchema =
  _DesignerMediaRenditionErrorResponse;
export type DesignerMediaRenditionErrorResponse = z.infer<
  typeof DesignerMediaRenditionErrorResponse
>;
