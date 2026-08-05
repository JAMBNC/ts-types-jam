import { z } from "zod";

const _NonNegativeIntRange = z
  .object({
    max: z.number().int().gte(0).optional(),
    min: z.number().int().gte(0),
  })
  .passthrough();
type _NonNegativeIntRangeSchema = typeof _NonNegativeIntRange;
export interface NonNegativeIntRangeSchema extends _NonNegativeIntRangeSchema {}
export const NonNegativeIntRange: NonNegativeIntRangeSchema =
  _NonNegativeIntRange;
export type NonNegativeIntRange = z.infer<typeof NonNegativeIntRange>;
