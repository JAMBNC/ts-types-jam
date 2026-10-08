import { z } from "zod";
const _SelectRestriction = z
    .object({
    type: z.literal("select"),
    /**Can the ingredient be selected?*/
    value: z.boolean().describe("Can the ingredient be selected?"),
})
    .strict();
export const SelectRestriction = _SelectRestriction;
