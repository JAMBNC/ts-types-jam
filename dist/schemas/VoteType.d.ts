import { z } from "zod";
export declare const VoteType: z.ZodEnum<{
    helpful: "helpful";
    unhelpful: "unhelpful";
}>;
export type VoteType = z.infer<typeof VoteType>;
//# sourceMappingURL=VoteType.d.ts.map