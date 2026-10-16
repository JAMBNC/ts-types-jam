import { z } from "zod";
declare const _TemplateKind: z.ZodString;
type _TemplateKindSchema = typeof _TemplateKind;
export interface TemplateKindSchema extends _TemplateKindSchema {
}
/**What sort of product the template describes. An open string resolved against a configuration registry, never an enum in code.*/
export declare const TemplateKind: TemplateKindSchema;
export type TemplateKind = z.infer<typeof TemplateKind>;
export {};
//# sourceMappingURL=TemplateKind.d.ts.map