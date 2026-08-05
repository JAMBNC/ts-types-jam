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
type _DesignerMediaDeleteResponseSchema = typeof _DesignerMediaDeleteResponse;
export interface DesignerMediaDeleteResponseSchema extends _DesignerMediaDeleteResponseSchema {}
/**The response from the design media delete endpoint.*/
export const DesignerMediaDeleteResponse: DesignerMediaDeleteResponseSchema =
  _DesignerMediaDeleteResponse;
export type DesignerMediaDeleteResponse = z.infer<
  typeof DesignerMediaDeleteResponse
>;
