import { z } from "zod";
import { Type } from "./Type.js";

const _AnsweredQuestion = z
  .object({
    type: Type,
    choices: z.array(z.string()),
    selected: z.array(z.string()).optional(),
  })
  .passthrough();
type _AnsweredQuestionSchema = typeof _AnsweredQuestion;
export interface AnsweredQuestionSchema extends _AnsweredQuestionSchema {}
export const AnsweredQuestion: AnsweredQuestionSchema = _AnsweredQuestion;
export type AnsweredQuestion = z.infer<typeof AnsweredQuestion>;
