import { z } from "zod";
const _DesignSourceIssue = z
    .object({
    code: z.string(),
    /**What a reviewer reads.*/
    meaning: z.string().describe("What a reviewer reads.").optional(),
    /**Whether it keeps the template from being published. Absent means it does not.*/
    blocks: z
        .boolean()
        .describe("Whether it keeps the template from being published. Absent means it does not.")
        .optional(),
})
    .strict()
    .describe("One problem with the artifact an interpretation was read from.");
/**One problem with the artifact an interpretation was read from.*/
export const DesignSourceIssue = _DesignSourceIssue;
