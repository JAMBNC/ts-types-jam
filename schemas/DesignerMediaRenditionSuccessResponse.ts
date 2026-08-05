import { z } from "zod";
import { DesignerMediaRenditionInfo } from "./DesignerMediaRenditionInfo.js";

const _DesignerMediaRenditionSuccessResponse = z
  .object({
    success: z.literal(true),
    /**The rendition data returned on a successful media rendition request.*/
    renditionInfo: DesignerMediaRenditionInfo,
  })
  .strict()
  .describe(
    "The response from the media rendition endpoint when the rendition succeeds.",
  );
type _DesignerMediaRenditionSuccessResponseSchema =
  typeof _DesignerMediaRenditionSuccessResponse;
export interface DesignerMediaRenditionSuccessResponseSchema extends _DesignerMediaRenditionSuccessResponseSchema {}
/**The response from the media rendition endpoint when the rendition succeeds.*/
export const DesignerMediaRenditionSuccessResponse: DesignerMediaRenditionSuccessResponseSchema =
  _DesignerMediaRenditionSuccessResponse;
export type DesignerMediaRenditionSuccessResponse = z.infer<
  typeof DesignerMediaRenditionSuccessResponse
>;
