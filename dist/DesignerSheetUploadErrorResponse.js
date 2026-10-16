import { z } from "zod";
import { DesignerSheetUploadProblem } from "./DesignerSheetUploadProblem.js";
const _DesignerSheetUploadErrorResponse = z
    .object({
    success: z.literal(false),
    /**A message describing why the sheet could not be placed.*/
    error: z
        .string()
        .describe("A message describing why the sheet could not be placed."),
    problems: z.array(DesignerSheetUploadProblem),
})
    .strict()
    .describe("Why nothing was placed.");
/**Why nothing was placed.*/
export const DesignerSheetUploadErrorResponse = _DesignerSheetUploadErrorResponse;
