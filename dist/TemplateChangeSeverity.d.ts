import { z } from "zod";
declare const _TemplateChangeSeverity: z.ZodEnum<{
    annotation: "annotation";
    geometry: "geometry";
    structural: "structural";
    tolerance: "tolerance";
}>;
type _TemplateChangeSeveritySchema = typeof _TemplateChangeSeverity;
export interface TemplateChangeSeveritySchema extends _TemplateChangeSeveritySchema {
}
/**How much a new version changed, which decides whether a pinned design has to be revalidated. Severity maps to action, so this is an enum and not configuration.*/
export declare const TemplateChangeSeverity: TemplateChangeSeveritySchema;
export type TemplateChangeSeverity = z.infer<typeof TemplateChangeSeverity>;
export {};
//# sourceMappingURL=TemplateChangeSeverity.d.ts.map