import { z } from "zod";
import { DesignState } from "./DesignState.js";
const _DesignerSheetUploadRequest = z
    .object({
    data: z
        .object({
        /**The upload token the media upload start endpoint returned for the PDF.*/
        uploadToken: z
            .string()
            .describe("The upload token the media upload start endpoint returned for the PDF."),
        /**The product the designer is open on, whose die the sheet is laid on. The same sku the template download takes.*/
        sku: z
            .string()
            .describe("The product the designer is open on, whose die the sheet is laid on. The same sku the template download takes."),
        /**The complete design state containing dimensions, pages, and ingredients.*/
        design: DesignState,
    })
        .strict(),
})
    .strict()
    .describe("Places a whole die-sheet PDF onto a folding design. The PDF was uploaded with the media upload start endpoint, and its upload token names it.");
/**Places a whole die-sheet PDF onto a folding design. The PDF was uploaded with the media upload start endpoint, and its upload token names it.*/
export const DesignerSheetUploadRequest = _DesignerSheetUploadRequest;
