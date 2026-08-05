import { z } from "zod";
import { Type } from "./Type.js";
const _AnsweredQuestion = z
    .object({
    type: Type,
    choices: z.array(z.string()),
    selected: z.array(z.string()).optional(),
})
    .passthrough();
export const AnsweredQuestion = _AnsweredQuestion;
