import { z } from "zod";
const _TemplateKind = z
    .string()
    .describe("What sort of product the template describes. An open string resolved against a configuration registry, never an enum in code.");
/**What sort of product the template describes. An open string resolved against a configuration registry, never an enum in code.*/
export const TemplateKind = _TemplateKind;
