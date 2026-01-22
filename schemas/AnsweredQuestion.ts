import { z } from "zod/v4";

export const AnsweredQuestion = z.object({
  choices: z.array(z.string()),
  selected: z.array(z.string()).optional(),
  type: z.literal("Tag"),
});
export type AnsweredQuestion = z.infer<typeof AnsweredQuestion>;
