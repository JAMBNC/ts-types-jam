import { z } from "zod";

/**The response from the design media delete endpoint.*/
export const DesignerMediaDeleteResponse = z
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
export type DesignerMediaDeleteResponse = z.infer<
  typeof DesignerMediaDeleteResponse
>;
