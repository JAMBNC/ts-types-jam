import { z } from "zod";

const _VoteType = z.enum(["helpful", "unhelpful"]);
type _VoteTypeSchema = typeof _VoteType;
export interface VoteTypeSchema extends _VoteTypeSchema {}
export const VoteType: VoteTypeSchema = _VoteType;
export type VoteType = z.infer<typeof VoteType>;
