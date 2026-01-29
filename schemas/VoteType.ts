import { z } from "zod";

export const VoteType = z.enum(["helpful", "unhelpful"]);
export type VoteType = z.infer<typeof VoteType>;
