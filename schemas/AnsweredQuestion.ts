import { z } from "zod";
import { Type } from "./Type.js";

export const AnsweredQuestion = z
  .object({
    choices: z.array(z.string()),
    selected: z.array(z.string()).optional(),
    type: Type,
  })
  .passthrough();
export type AnsweredQuestion = z.infer<typeof AnsweredQuestion>;
