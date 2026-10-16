import { z } from "zod";
const _TemplateChangeSeverity = z
    .enum(["annotation", "tolerance", "geometry", "structural"])
    .describe("How much a new version changed, which decides whether a pinned design has to be revalidated. Severity maps to action, so this is an enum and not configuration.");
/**How much a new version changed, which decides whether a pinned design has to be revalidated. Severity maps to action, so this is an enum and not configuration.*/
export const TemplateChangeSeverity = _TemplateChangeSeverity;
