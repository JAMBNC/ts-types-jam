import { z } from "zod";
import { Process } from "./Process.js";
export const ProcessRestriction = z
    .object({
    type: z.enum(["oneOf", "anyOf", "zeroOrOneOf"]),
    processes: z.array(z.array(Process)),
})
    .passthrough();
