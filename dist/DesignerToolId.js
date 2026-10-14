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
    .describe("Identifier of a designer tool that a config may deny. Values are the designer's tool registry keys. Some tools are intentionally excluded and cannot be denied.");
/**Identifier of a designer tool that a config may deny. Values are the designer's tool registry keys. Some tools are intentionally excluded and cannot be denied.*/
export const DesignerToolId = _DesignerToolId;
