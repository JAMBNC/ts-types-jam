import { z } from "zod";
import { DesignerMediaRenditionInfo } from "./DesignerMediaRenditionInfo.js";

/**The response from the media rendition endpoint when the rendition succeeds.*/
export const DesignerMediaRenditionSuccessResponse = z
  .object({
    success: z.literal(true),
    /**The rendition data returned on a successful media rendition request.*/
    renditionInfo: DesignerMediaRenditionInfo,
  })
  .strict()
  .describe(
    "The response from the media rendition endpoint when the rendition succeeds.",
  );
export type DesignerMediaRenditionSuccessResponse = z.infer<
  typeof DesignerMediaRenditionSuccessResponse
>;
