import { z } from "zod";
const _DeleteRestriction = z
    .object({
    type: z.literal("delete"),
    /**Can the ingredient be deleted?*/
    value: z.boolean().describe("Can the ingredient be deleted?"),
})
    .strict();
export const DeleteRestriction = _DeleteRestriction;
