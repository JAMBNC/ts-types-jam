import { z } from "zod";
import { PrintVerification } from "./PrintVerification.js";
export const ApiVerification = z
    .object({
    messages: z.array(z.string()),
    sides: z.array(PrintVerification),
    layers: z
        .object({ messages: z.array(z.string()), desc: z.array(z.string()) })
        .passthrough(),
})
    .passthrough();
