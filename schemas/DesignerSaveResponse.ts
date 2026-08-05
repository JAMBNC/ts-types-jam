import { z } from "zod";

const _DesignerSaveResponse = z
  .object({
    /**Whether the save was successful.*/
    success: z.boolean().describe("Whether the save was successful."),
    /**The unique identifier for the saved design.*/
    designId: z
      .string()
      .describe("The unique identifier for the saved design."),
  })
  .strict()
  .describe("The response from the design save endpoint.");
type _DesignerSaveResponseSchema = typeof _DesignerSaveResponse;
export interface DesignerSaveResponseSchema extends _DesignerSaveResponseSchema {}
/**The response from the design save endpoint.*/
export const DesignerSaveResponse: DesignerSaveResponseSchema =
  _DesignerSaveResponse;
export type DesignerSaveResponse = z.infer<typeof DesignerSaveResponse>;
