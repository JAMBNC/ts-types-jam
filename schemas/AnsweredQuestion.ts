import { z } from "zod";
import { Type } from "./Type.js";

export const AnsweredQuestion = z
  .object({
    type: Type,
    choices: z.array(z.string()),
    selected: z.array(z.string()).optional(),
  })
  .passthrough();
export type AnsweredQuestion = z.infer<typeof AnsweredQuestion>;
