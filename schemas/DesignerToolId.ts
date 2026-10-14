import { z } from "zod";

const _DesignerToolId = z
  .enum([
    "backgroundColor",
    "freeText",
    "ingredientRestrictions",
    "lamination",
    "logo",
    "mailingAddress",
    "pageRestrictions",
    "prepress",
    "returnAddress",
    "uploadFullDesign",
  ])
  .describe(
    "Identifier of a designer tool that a config may deny. Values are the designer's tool registry keys. Some tools are intentionally excluded and cannot be denied.",
  );
type _DesignerToolIdSchema = typeof _DesignerToolId;
export interface DesignerToolIdSchema extends _DesignerToolIdSchema {}
/**Identifier of a designer tool that a config may deny. Values are the designer's tool registry keys. Some tools are intentionally excluded and cannot be denied.*/
export const DesignerToolId: DesignerToolIdSchema = _DesignerToolId;
export type DesignerToolId = z.infer<typeof DesignerToolId>;
