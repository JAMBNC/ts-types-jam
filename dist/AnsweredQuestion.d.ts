import { z } from "zod";
declare const _AnsweredQuestion: z.ZodObject<{
    type: import("./Type.js").TypeSchema;
    choices: z.ZodArray<z.ZodString>;
    selected: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$loose>;
type _AnsweredQuestionSchema = typeof _AnsweredQuestion;
export interface AnsweredQuestionSchema extends _AnsweredQuestionSchema {
}
export declare const AnsweredQuestion: AnsweredQuestionSchema;
export type AnsweredQuestion = z.infer<typeof AnsweredQuestion>;
export {};
//# sourceMappingURL=AnsweredQuestion.d.ts.map