import { z } from "zod";

const _TemplateKind = z
  .string()
  .describe(
    "What sort of product the template describes. An open string resolved against a configuration registry, never an enum in code.",
  );
type _TemplateKindSchema = typeof _TemplateKind;
export interface TemplateKindSchema extends _TemplateKindSchema {}
/**What sort of product the template describes. An open string resolved against a configuration registry, never an enum in code.*/
export const TemplateKind: TemplateKindSchema = _TemplateKind;
export type TemplateKind = z.infer<typeof TemplateKind>;
