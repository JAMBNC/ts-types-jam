import { z } from "zod";
import { Process } from "./Process.js";

const _ProcessRestriction = z
  .object({
    type: z.enum(["oneOf", "anyOf", "zeroOrOneOf"]),
    processes: z.array(z.array(Process)),
  })
  .passthrough();
type _ProcessRestrictionSchema = typeof _ProcessRestriction;
export interface ProcessRestrictionSchema extends _ProcessRestrictionSchema {}
export const ProcessRestriction: ProcessRestrictionSchema = _ProcessRestriction;
export type ProcessRestriction = z.infer<typeof ProcessRestriction>;
