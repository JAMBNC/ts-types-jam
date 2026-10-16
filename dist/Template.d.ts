import { z } from "zod";
declare const _Template: z.ZodObject<{
    id: z.ZodString;
    version: z.ZodNumber;
    kind: import("./TemplateKind.js").TemplateKindSchema;
    artifact: z.ZodOptional<import("./TemplateArtifact.js").TemplateArtifactSchema>;
    interpretation: import("./DesignInterpretation.js").DesignInterpretationSchema;
    changeSeverity: z.ZodOptional<import("./TemplateChangeSeverity.js").TemplateChangeSeveritySchema>;
}, z.core.$strict>;
type _TemplateSchema = typeof _Template;
export interface TemplateSchema extends _TemplateSchema {
}
/**A template entity. Geometry lives in the artifact and in the DesignState distilled from it; everything here is the part that cannot be re-derived from pixels or paths.*/
export declare const Template: TemplateSchema;
export type Template = z.infer<typeof Template>;
export {};
//# sourceMappingURL=Template.d.ts.map