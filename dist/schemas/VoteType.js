import { z } from "zod";
export const VoteType = z.enum(["helpful", "unhelpful"]);
