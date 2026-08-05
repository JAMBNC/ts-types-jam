import { z } from "zod";
const _DesignerMediaDeleteResponse = z
    .object({
    /**Whether the delete was successful.*/
    success: z.boolean().describe("Whether the delete was successful."),
    /**Any additional messaging for the frontend*/
    message: z
        .string()
        .describe("Any additional messaging for the frontend")
        .optional(),
})
    .strict()
    .describe("The response from the design media delete endpoint.");
/**The response from the design media delete endpoint.*/
export const DesignerMediaDeleteResponse = _DesignerMediaDeleteResponse;
