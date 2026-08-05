import { z } from "zod";
declare const _VoteType: z.ZodEnum<{
    helpful: "helpful";
    unhelpful: "unhelpful";
}>;
type _VoteTypeSchema = typeof _VoteType;
export interface VoteTypeSchema extends _VoteTypeSchema {
}
export declare const VoteType: VoteTypeSchema;
export type VoteType = z.infer<typeof VoteType>;
export {};
//# sourceMappingURL=VoteType.d.ts.map