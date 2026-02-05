import { z } from "zod";
import { AttributeRenderPreference } from "./AttributeRenderPreference.js";
import { PredefinedAttributeValue } from "./PredefinedAttributeValue.js";

export const Attribute = z
  .object({
    code: z.string(),
    displayForCustomer: z.boolean(),
    identifiers: z.record(z.string(), z.any()).optional(),
    label: z.string(),
    predefinedValues: z.array(PredefinedAttributeValue).optional(),
    renderPreference: AttributeRenderPreference,
    secondarySelectionEnabled: z.boolean(),
    usedForProductSelection: z.boolean(),
  })
  .passthrough();
export type Attribute = z.infer<typeof Attribute>;
