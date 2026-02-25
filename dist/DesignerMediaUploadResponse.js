import { z } from "zod";
import { DesignerMediaUploadErrorResponse } from "./DesignerMediaUploadErrorResponse.js";
import { DesignerMediaUploadSuccessResponse } from "./DesignerMediaUploadSuccessResponse.js";
/**The response from the media upload endpoint.*/
export const DesignerMediaUploadResponse = z
    .union([DesignerMediaUploadSuccessResponse, DesignerMediaUploadErrorResponse])
    .describe("The response from the media upload endpoint.");
