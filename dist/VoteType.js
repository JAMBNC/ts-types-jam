import { z } from "zod";
const _VoteType = z.enum(["helpful", "unhelpful"]);
export const VoteType = _VoteType;
