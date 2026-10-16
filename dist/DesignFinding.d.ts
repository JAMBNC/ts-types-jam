import { z } from "zod";
declare const _DesignFinding: z.ZodObject<{
    code: z.ZodString;
    severity: import("./DesignFindingSeverity.js").DesignFindingSeveritySchema;
    message: z.ZodString;
    subjects: z.ZodOptional<z.ZodArray<z.ZodString>>;
    detail: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    overridable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
type _DesignFindingSchema = typeof _DesignFinding;
export interface DesignFindingSchema extends _DesignFindingSchema {
}
/**One thing a preflight check found on an interpretation: which check, how much it matters, what a reviewer reads, and the panels or views it is about.*/
export declare const DesignFinding: DesignFindingSchema;
export type DesignFinding = z.infer<typeof DesignFinding>;
export {};
//# sourceMappingURL=DesignFinding.d.ts.map