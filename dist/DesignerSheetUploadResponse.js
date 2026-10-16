import { z } from "zod";
import { DesignerSheetUploadErrorResponse } from "./DesignerSheetUploadErrorResponse.js";
import { DesignerSheetUploadSuccessResponse } from "./DesignerSheetUploadSuccessResponse.js";
const _DesignerSheetUploadResponse = z.union([
    DesignerSheetUploadSuccessResponse,
    DesignerSheetUploadErrorResponse,
]);
export const DesignerSheetUploadResponse = _DesignerSheetUploadResponse;
