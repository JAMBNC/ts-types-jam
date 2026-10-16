import { z } from "zod";
const _DesignerTemplateEndpoints = z
    .object({
    /**The endpoint URL for downloading full design template files.*/
    download: z
        .string()
        .url()
        .describe("The endpoint URL for downloading full design template files."),
    /**The endpoint URL that places a whole die-sheet PDF onto a folding design's views. (uses the DesignerAuth.endpointAuth)*/
    sheetUpload: z
        .string()
        .url()
        .describe("The endpoint URL that places a whole die-sheet PDF onto a folding design's views. (uses the DesignerAuth.endpointAuth)")
        .optional(),
})
    .strict();
export const DesignerTemplateEndpoints = _DesignerTemplateEndpoints;
