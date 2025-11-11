import { z } from "zod/v4";
export declare const AnsweredQuestion: z.ZodObject<{
    choices: z.ZodArray<z.ZodString>;
    selected: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type: z.ZodLiteral<"Tag">;
}, z.core.$strip>;
export type AnsweredQuestion = z.infer<typeof AnsweredQuestion>;
//# sourceMappingURL=AnsweredQuestion.d.ts.map