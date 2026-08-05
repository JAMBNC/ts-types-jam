import { z } from "zod";
import { DesignerMediaUploadErrorResponse } from "./DesignerMediaUploadErrorResponse.js";
import { DesignerMediaUploadSuccessResponse } from "./DesignerMediaUploadSuccessResponse.js";

const _DesignerMediaUploadResponse = z
  .union([DesignerMediaUploadSuccessResponse, DesignerMediaUploadErrorResponse])
  .describe("The response from the media upload endpoint.");
type _DesignerMediaUploadResponseSchema = typeof _DesignerMediaUploadResponse;
export interface DesignerMediaUploadResponseSchema extends _DesignerMediaUploadResponseSchema {}
/**The response from the media upload endpoint.*/
export const DesignerMediaUploadResponse: DesignerMediaUploadResponseSchema =
  _DesignerMediaUploadResponse;
export type DesignerMediaUploadResponse = z.infer<
  typeof DesignerMediaUploadResponse
>;
