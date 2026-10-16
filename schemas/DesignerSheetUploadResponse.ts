import { z } from "zod";
import { DesignerSheetUploadErrorResponse } from "./DesignerSheetUploadErrorResponse.js";
import { DesignerSheetUploadSuccessResponse } from "./DesignerSheetUploadSuccessResponse.js";

const _DesignerSheetUploadResponse = z.union([
  DesignerSheetUploadSuccessResponse,
  DesignerSheetUploadErrorResponse,
]);
type _DesignerSheetUploadResponseSchema = typeof _DesignerSheetUploadResponse;
export interface DesignerSheetUploadResponseSchema extends _DesignerSheetUploadResponseSchema {}
export const DesignerSheetUploadResponse: DesignerSheetUploadResponseSchema =
  _DesignerSheetUploadResponse;
export type DesignerSheetUploadResponse = z.infer<
  typeof DesignerSheetUploadResponse
>;
