import { z } from "zod";
const _DesignerTemplateEndpoints = z
    .object({
    /**The endpoint URL for downloading full design template files.*/
    download: z
        .string()
        .url()
        .describe("The endpoint URL for downloading full design template files."),
})
    .strict();
export const DesignerTemplateEndpoints = _DesignerTemplateEndpoints;
