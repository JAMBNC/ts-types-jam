import { z } from "zod";
import { Process } from "./Process.js";

export const ProcessAllowlistItem = z
  .object({
    /**Defines how visual content is transferred to the medium.*/
    process: Process,
    /**Are custom colors allowed for this process?*/
    allowCustomColors: z
      .boolean()
      .describe("Are custom colors allowed for this process?")
      .optional(),
    /**Is background coloring allowed for this process?*/
    allowBackgroundColor: z
      .boolean()
      .describe("Is background coloring allowed for this process?")
      .optional(),
  })
  .strict();
export type ProcessAllowlistItem = z.infer<typeof ProcessAllowlistItem>;
