import { z } from "zod";
import { DesignState } from "./DesignState.js";
import { DesignerSheetUploadProblem } from "./DesignerSheetUploadProblem.js";
const _DesignerSheetUploadSuccessResponse = z
    .object({
    success: z.literal(true),
    /**The complete design state containing dimensions, pages, and ingredients.*/
    design: DesignState,
    /**How many pieces of artwork were placed.*/
    placements: z
        .number()
        .int()
        .gte(1)
        .describe("How many pieces of artwork were placed."),
    /**What was placed anyway but deserves a look, such as a sheet made from an older version of the template.*/
    problems: z
        .array(DesignerSheetUploadProblem)
        .describe("What was placed anyway but deserves a look, such as a sheet made from an older version of the template."),
})
    .strict()
    .describe("The design with the sheet's artwork placed on its views, replacing any sheet placed before.");
/**The design with the sheet's artwork placed on its views, replacing any sheet placed before.*/
export const DesignerSheetUploadSuccessResponse = _DesignerSheetUploadSuccessResponse;
