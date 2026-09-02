import { z } from "zod";
const _DesignerSaveResponse = z
    .object({
    /**Whether the save was successful.*/
    success: z.boolean().describe("Whether the save was successful."),
    /**The unique identifier for the saved design.*/
    designUuid: z
        .string()
        .describe("The unique identifier for the saved design."),
    snapshots: z.array(z.object({ url: z.string().url(), label: z.string() }).strict()),
    /**Primary image used for previewing the design in cards or lists.*/
    designPreviewImage: z
        .string()
        .url()
        .describe("Primary image used for previewing the design in cards or lists."),
})
    .strict()
    .describe("The response from the design save endpoint.");
/**The response from the design save endpoint.*/
export const DesignerSaveResponse = _DesignerSaveResponse;
