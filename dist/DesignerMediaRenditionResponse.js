import { z } from "zod";
import { DesignerMediaRenditionErrorResponse } from "./DesignerMediaRenditionErrorResponse.js";
import { DesignerMediaRenditionSuccessResponse } from "./DesignerMediaRenditionSuccessResponse.js";
const _DesignerMediaRenditionResponse = z
    .union([
    DesignerMediaRenditionSuccessResponse,
    DesignerMediaRenditionErrorResponse,
])
    .describe("The response from the media rendition endpoint.");
/**The response from the media rendition endpoint.*/
export const DesignerMediaRenditionResponse = _DesignerMediaRenditionResponse;
