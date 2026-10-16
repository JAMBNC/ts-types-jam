import { z } from "zod";
import { DesignInterpretation } from "./DesignInterpretation.js";
import { TemplateArtifact } from "./TemplateArtifact.js";
import { TemplateChangeSeverity } from "./TemplateChangeSeverity.js";
import { TemplateKind } from "./TemplateKind.js";

const _Template = z
  .object({
    /**Stable identifier for the template, shared across versions.*/
    id: z
      .string()
      .describe("Stable identifier for the template, shared across versions."),
    /**Monotonic version. Designs pin the version they were created against.*/
    version: z
      .number()
      .int()
      .gte(1)
      .describe(
        "Monotonic version. Designs pin the version they were created against.",
      ),
    /**What sort of product the template describes. An open string resolved against a configuration registry, never an enum in code.*/
    kind: TemplateKind,
    /**The stored press file. Content-addressed, because identity comes from the upload action and not from anything embedded in the file.*/
    artifact: TemplateArtifact.optional(),
    /**The non-derivable half of a template: which regions are views, fold direction and order, region roles, and what a vendor's separation names mean.*/
    interpretation: DesignInterpretation,
    /**How much a new version changed, which decides whether a pinned design has to be revalidated. Severity maps to action, so this is an enum and not configuration.*/
    changeSeverity: TemplateChangeSeverity.optional(),
  })
  .strict()
  .describe(
    "A template entity. Geometry lives in the artifact and in the DesignState distilled from it; everything here is the part that cannot be re-derived from pixels or paths.",
  );
type _TemplateSchema = typeof _Template;
export interface TemplateSchema extends _TemplateSchema {}
/**A template entity. Geometry lives in the artifact and in the DesignState distilled from it; everything here is the part that cannot be re-derived from pixels or paths.*/
export const Template: TemplateSchema = _Template;
export type Template = z.infer<typeof Template>;
