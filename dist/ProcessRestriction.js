import { z } from "zod";
import { Process } from "./Process.js";
const _ProcessRestriction = z
    .object({
    type: z.enum(["oneOf", "anyOf", "zeroOrOneOf"]),
    processes: z.array(z.array(Process)),
})
    .passthrough();
export const ProcessRestriction = _ProcessRestriction;
