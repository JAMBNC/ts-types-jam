import { z } from "zod";
import { DesignerMediaRenditionErrorResponse } from "./DesignerMediaRenditionErrorResponse.js";
import { DesignerMediaRenditionSuccessResponse } from "./DesignerMediaRenditionSuccessResponse.js";

const _DesignerMediaRenditionResponse = z
  .union([
    DesignerMediaRenditionSuccessResponse,
    DesignerMediaRenditionErrorResponse,
  ])
  .describe("The response from the media rendition endpoint.");
type _DesignerMediaRenditionResponseSchema =
  typeof _DesignerMediaRenditionResponse;
export interface DesignerMediaRenditionResponseSchema extends _DesignerMediaRenditionResponseSchema {}
/**The response from the media rendition endpoint.*/
export const DesignerMediaRenditionResponse: DesignerMediaRenditionResponseSchema =
  _DesignerMediaRenditionResponse;
export type DesignerMediaRenditionResponse = z.infer<
  typeof DesignerMediaRenditionResponse
>;
