import { z } from "zod";

/**The response from the design save endpoint.*/
export const DesignSaveResponse = z
  .object({
    /**Whether the save was successful.*/
    status: z.boolean().describe("Whether the save was successful."),
    /**The unique identifier for the saved design.*/
    designId: z
      .string()
      .describe("The unique identifier for the saved design."),
  })
  .strict()
  .describe("The response from the design save endpoint.");
export type DesignSaveResponse = z.infer<typeof DesignSaveResponse>;
