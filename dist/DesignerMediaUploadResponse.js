import { z } from "zod";
import { DesignerMediaUploadErrorResponse } from "./DesignerMediaUploadErrorResponse.js";
import { DesignerMediaUploadSuccessResponse } from "./DesignerMediaUploadSuccessResponse.js";
const _DesignerMediaUploadResponse = z
    .union([DesignerMediaUploadSuccessResponse, DesignerMediaUploadErrorResponse])
    .describe("The response from the media upload endpoint.");
/**The response from the media upload endpoint.*/
export const DesignerMediaUploadResponse = _DesignerMediaUploadResponse;
