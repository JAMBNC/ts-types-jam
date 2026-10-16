import { z } from "zod";

const _DesignSourceIssue = z
  .object({
    code: z.string(),
    /**What a reviewer reads.*/
    meaning: z.string().describe("What a reviewer reads.").optional(),
    /**Whether it keeps the template from being published. Absent means it does not.*/
    blocks: z
      .boolean()
      .describe(
        "Whether it keeps the template from being published. Absent means it does not.",
      )
      .optional(),
  })
  .strict()
  .describe("One problem with the artifact an interpretation was read from.");
type _DesignSourceIssueSchema = typeof _DesignSourceIssue;
export interface DesignSourceIssueSchema extends _DesignSourceIssueSchema {}
/**One problem with the artifact an interpretation was read from.*/
export const DesignSourceIssue: DesignSourceIssueSchema = _DesignSourceIssue;
export type DesignSourceIssue = z.infer<typeof DesignSourceIssue>;
