import { z } from "zod";
declare const _DesignProvenance: z.ZodObject<{
    proposedBy: z.ZodOptional<z.ZodString>;
    confirmedBy: z.ZodOptional<z.ZodString>;
    sourceSha256: z.ZodOptional<z.ZodString>;
    intakeSettingsVersion: z.ZodOptional<z.ZodNumber>;
    sourceIssues: z.ZodOptional<z.ZodArray<import("./DesignSourceIssue.js").DesignSourceIssueSchema>>;
}, z.core.$strict>;
type _DesignProvenanceSchema = typeof _DesignProvenance;
export interface DesignProvenanceSchema extends _DesignProvenanceSchema {
}
/**Who proposed the interpretation and who signed off on it. Detectors propose, prepress confirms.*/
export declare const DesignProvenance: DesignProvenanceSchema;
export type DesignProvenance = z.infer<typeof DesignProvenance>;
export {};
//# sourceMappingURL=DesignProvenance.d.ts.map