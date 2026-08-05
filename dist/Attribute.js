import { z } from "zod";
import { AttributeRenderPreference } from "./AttributeRenderPreference.js";
import { PredefinedAttributeValue } from "./PredefinedAttributeValue.js";
const _Attribute = z
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
export const Attribute = _Attribute;
