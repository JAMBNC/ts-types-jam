import { z } from "zod";
export const DesignerSaveEndpoints = z
    .object({
    /**The endpoint URL for saving the designer data*/
    save: z
        .string()
        .url()
        .describe("The endpoint URL for saving the designer data"),
})
    .passthrough();
