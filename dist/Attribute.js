import { z } from "zod";
export const Attribute = z.object({
    code: z.string(),
    displayForCustomer: z.boolean(),
    identifiers: z.record(z.any()).optional(),
    label: z.string(),
    predefinedValues: z
        .array(z.object({
        identifiers: z.record(z.any()),
        swatches: z.record(z.any()).optional(),
        value: z.string(),
    }))
        .optional(),
    renderPreference: z.enum(["tabs", "dropdown", "swatches", "modal"]),
    secondarySelectionEnabled: z.boolean(),
    usedForProductSelection: z.boolean(),
});
