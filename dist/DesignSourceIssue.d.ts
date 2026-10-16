import { z } from "zod";
declare const _DesignSourceIssue: z.ZodObject<{
    code: z.ZodString;
    meaning: z.ZodOptional<z.ZodString>;
    blocks: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
type _DesignSourceIssueSchema = typeof _DesignSourceIssue;
export interface DesignSourceIssueSchema extends _DesignSourceIssueSchema {
}
/**One problem with the artifact an interpretation was read from.*/
export declare const DesignSourceIssue: DesignSourceIssueSchema;
export type DesignSourceIssue = z.infer<typeof DesignSourceIssue>;
export {};
//# sourceMappingURL=DesignSourceIssue.d.ts.map