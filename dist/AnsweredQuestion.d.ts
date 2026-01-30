import { z } from "zod";
export declare const AnsweredQuestion: z.ZodObject<{
    choices: z.ZodArray<z.ZodString>;
    selected: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type: z.ZodLiteral<"Tag">;
}, z.core.$loose>;
export type AnsweredQuestion = z.infer<typeof AnsweredQuestion>;
//# sourceMappingURL=AnsweredQuestion.d.ts.map